import classNames from 'classnames'
import Image from 'next/image'
import Link from 'next/link'

import styles from './Card.module.css'

interface Props {
  image: string | StaticImageData
  meta: {
    [key: string]: string | number
  }
  name?: string
  url?: string | null
}

const Card = ({ image, meta, name, url }: Props) => (
  <div
    className={classNames(styles.card, {
      [styles.cardWithLink]: !!url,
    })}
  >
    <div className={styles.cardImageWrapper}>
      {image && (
        <Image
          alt=''
          height='300'
          layout='responsive'
          src={image}
          width='300'
        />
      )}
    </div>

    <div className={styles.cardMetaWrapper}>
      {name && <h3 className={styles.cardMetaTitle}>{name}</h3>}

      {Object.entries(meta).map(([key, value], index) =>
        value ? (
          <p className={styles.cardMetaItem} key={`meta-item-${index}`}>
            <strong>{key}: </strong>
            {value}
          </p>
        ) : null
      )}
    </div>

    {!!url && (
      <Link href={url}>
        <a className={styles.cardLink} />
      </Link>
    )}
  </div>
)

export default Card
