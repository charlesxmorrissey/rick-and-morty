import Link from 'next/link'
import React, { useState } from 'react'

import Card from 'components/Card'
import { CharacterResponse, JSON_PLACEHOLDER_API } from 'constant'

import styles from './Detail.module.css'

interface Props {
  detailData: CharacterResponse
}

interface Note {
  characterId: string
  id: number
  text: string
}

const Detail = ({ detailData }: Props) => {
  const [isSubmitButtonDisabled, setIsSubmitButtonDisabled] =
    useState<boolean>(true)
  const [postValue, setPostValue] = useState<string>('')
  const [note, setNote] = useState<Note>()

  const {
    episode,
    gender,
    id,
    image,
    location: { id: locationId, name: locationName },
    name,
    species,
    status,
    type,
  } = detailData

  const handleAddNote = async (e: React.SyntheticEvent) => {
    e.preventDefault()

    try {
      const request = await fetch(JSON_PLACEHOLDER_API, {
        body: JSON.stringify({
          characterId: id,
          text: postValue,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
        method: 'POST',
      })

      const result = await request.json()

      setNote(result)
    } catch (error) {
      console.error(error)
    }
  }

  const handleInputOnChange = (e: React.FormEvent<HTMLTextAreaElement>) => {
    if (!e.currentTarget.value.trim().length) {
      setIsSubmitButtonDisabled(true)
    } else {
      setIsSubmitButtonDisabled(false)
    }

    setPostValue(e.currentTarget.value)
  }

  return (
    <div className={styles.detailWrapper}>
      <header className={styles.detailHeader}>
        <h1 className={styles.detailHeaderTitle}>{name}</h1>

        <Link href={`/${locationId}`}>
          <a>&lt; Return to {locationName}</a>
        </Link>
      </header>

      <div className={styles.detailContentWrapper}>
        <div className={styles.detailCardColumn}>
          <Card
            image={image}
            meta={{
              episodes: episode.length,
              gender,
              origin: locationName,
              species,
              status,
              type,
            }}
          />
        </div>

        <div className={styles.detailFormColumn}>
          <form className={styles.detailForm} onSubmit={handleAddNote}>
            <label className={styles.detailFormLabel} htmlFor='note'>
              Add a note:
            </label>

            <textarea
              className={styles.detailFormInput}
              id='note'
              name='note'
              onChange={handleInputOnChange}
              rows={6}
              value={postValue}
            />

            <button
              className={styles.detailFormButton}
              disabled={isSubmitButtonDisabled}
              type='submit'
            >
              Submit
            </button>
          </form>

          <h3>Notes</h3>

          {!!note && (
            <ul>
              <li>{note.text}</li>
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}

export default Detail
