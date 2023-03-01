import Card from 'components/Card'
import { LocationResponse } from 'constant'

import styles from './Locations.module.css'

import placeholderImg from '/public/images/placeholder.png'

interface Props {
  locationData: LocationResponse[]
}

const Locations = ({ locationData }: Props) => (
  <div className={styles.locationsWrapper}>
    <h1 className={styles.locationsHeader}>Locations</h1>

    <div className={styles.locationsCardWrapper}>
      {!!locationData &&
        locationData.map(({ id, name, residents, type }, index) => {
          const residentsCount = residents.length

          return (
            <Card
              image={!!residentsCount ? residents[0]?.image : placeholderImg}
              key={`card-${index}`}
              meta={{
                residents: residentsCount,
                type,
              }}
              name={name}
              url={!!residentsCount ? `/${id}` : null}
            />
          )
        })}
    </div>
  </div>
)

export default Locations
