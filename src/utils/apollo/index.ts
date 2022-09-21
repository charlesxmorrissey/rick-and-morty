import {
  ApolloClient,
  ApolloLink,
  InMemoryCache,
  createHttpLink,
} from '@apollo/client'
import { onError } from '@apollo/client/link/error'
import nextApollo from '@next-tools/apollo'
import { GraphQLError } from 'graphql'
import fetch from 'isomorphic-fetch'

import { RICK_AND_MORTY_API } from 'constant'

import pkgInfo from '../../../package.json'

export const isServer = (): boolean => typeof window === 'undefined'

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.map((err) => {
      const sanitized = sanitize(err)

      reportError(sanitized, err.extensions)
    })
  }

  if (networkError) {
    reportError(networkError)
  }
})

const reportError = (err: GraphQLError | Error, details?: any) => {
  if (!isServer()) {
    ;(window as any)?.newrelic?.noticeError(err, details)
  } else {
    console.error(err)
  }
}

const sanitize = (err: GraphQLError) => {
  err.extensions.variables = {}

  return err
}

const httpLink = createHttpLink({
  credentials: 'include',
  fetch: fetch as any,
  uri: RICK_AND_MORTY_API,
})

const link = ApolloLink.from([errorLink, httpLink])

export const { initApollo, useApollo } = nextApollo(
  () =>
    new ApolloClient({
      cache: new InMemoryCache(),
      link,
      name: pkgInfo.name,
      ssrMode: isServer(),
      version: pkgInfo.version,
    })
)
