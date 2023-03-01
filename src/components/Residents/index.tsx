import Link from 'next/link'

import Card from 'components/Card'
import { LocationResponse } from 'constant'

import styles from './Residents.module.css'

interface Props {
  residentData: LocationResponse
}

const Residents = ({ residentData }: Props) => (
  <div className={styles.residentsWrapper}>
    <header className={styles.residentsHeader}>
      <h1 className={styles.residentsHeaderTitle}>
        Residents of {residentData.name}
      </h1>

      <Link href='/'>
        <a>&lt; Return to locations</a>
      </Link>
    </header>

    <div className={styles.residentsCardWrapper}>
      {!!residentData.residents &&
        residentData.residents.map(
          ({ id, image, name, species, status }, index) => (
            <Card
              image={image}
              key={`card-${index}`}
              meta={{
                species,
                status,
              }}
              name={name}
              url={`/character/${id}`}
            />
          )
        )}
    </div>
  </div>
)

export default Residents
