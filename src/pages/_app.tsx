import 'styles/globals.css';
import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Layout from '../components/global/Layout';
import Head from 'next/head';
import React from 'react';

const queryClient = new ApolloClient({
  uri: 'http://localhost:8000/',
  cache: new InMemoryCache(),
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
        />
      </Head>
      <ApolloProvider client={queryClient}>
        <RecoilRoot>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </RecoilRoot>
      </ApolloProvider>
    </>
  );
}
