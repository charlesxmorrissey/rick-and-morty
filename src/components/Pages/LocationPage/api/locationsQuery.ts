import { gql } from '@apollo/client'

export const LOCATIONS_QUERY = gql`
  query locations {
    locations {
      results {
        id
        name
        residents {
          id
          image
          name
          species
          status
        }
        type
      }
    }
  }
`

export const makeLocationsQuery = () => ({
  fetchPolicy: 'network-only',
  query: LOCATIONS_QUERY,
})
