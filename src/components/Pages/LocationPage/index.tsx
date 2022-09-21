import type { NextPage } from 'next'
import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'

import Locations from 'components/Locations'
import { getLocations } from 'components/Pages/LocationPage/api/getLocations'
import Residents from 'components/Residents'
import { LocationResponse } from 'constant'

interface Props {
  data: LocationResponse[]
}

export const LocationPage: NextPage<Props> = ({ data }) => {
  const {
    query: { locationId },
  } = useRouter()
  const isLocationsList = !locationId

  const getResidentsByLocationId = (locationId: string | string[]) =>
    data.find((item) => item.id === locationId)

  return (
    <>
      {isLocationsList ? (
        <Locations locationData={data} />
      ) : (
        <Residents
          residentData={
            getResidentsByLocationId(locationId) as LocationResponse
          }
        />
      )}
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const data = await getLocations()

  return {
    props: {
      data,
    },
  }
}
