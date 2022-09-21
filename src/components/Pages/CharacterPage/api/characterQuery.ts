import { gql } from '@apollo/client'

import { CharacterArgs, Query } from 'constant'

export const CHARACTER_QUERY = gql`
  query character($id: ID!) {
    character(id: $id) {
      episode {
        episode
        name
      }
      gender
      id
      image
      location {
        id
        name
      }
      name
      species
      status
      type
    }
  }
`

export const makeCharacterQuery = ({
  id,
}: CharacterArgs): Query<CharacterArgs> => ({
  fetchPolicy: 'network-only',
  query: CHARACTER_QUERY,
  variables: {
    id,
  },
})
