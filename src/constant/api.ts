import { ApolloClient, InMemoryCache } from '@apollo/client'
import { DocumentNode } from '@apollo/react-hooks'

export const JSON_PLACEHOLDER_API = 'https://jsonplaceholder.typicode.com/posts'
export const RICK_AND_MORTY_API = 'https://rickandmortyapi.com/graphql'

export type Client = ApolloClient<InMemoryCache>

export interface QueryContext {
  headers?: { [key: string]: string }
}

export interface Query<V> {
  context?: QueryContext
  fetchPolicy?: string
  query: DocumentNode
  variables: V
}
