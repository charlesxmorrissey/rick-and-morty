import { initApollo } from 'utils'

import { makeLocationsQuery } from './locationsQuery'

export const getLocations = async () => {
  try {
    const { data } = await initApollo().query(makeLocationsQuery())

    return data?.locations?.results
  } catch (error) {
    throw error
  }
}
