import { ApolloProvider } from '@apollo/react-hooks'
import type { AppProps } from 'next/app'
import Head from 'next/head'

import PageLayout from 'components/PageLayout'
import { useApollo } from 'utils'

import 'assets/styles/globals.css'

const App = ({ Component, pageProps }: AppProps) => {
  const apolloClient = useApollo(pageProps.initApolloState)

  return (
    <>
      <Head>
        <link href='/images/favicon.ico' rel='icon' />
        <meta content='rick-morty-fe-assessment' name='description' />
        <meta
          content='width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=0'
          name='viewport'
        />
        <title>Rick and Morty</title>
      </Head>

      <ApolloProvider client={apolloClient}>
        <PageLayout>
          <Component {...pageProps} />
        </PageLayout>
      </ApolloProvider>
    </>
  )
}

export default App
