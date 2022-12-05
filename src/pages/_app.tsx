import 'styles/globals.css';
import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Layout from '../components/global/Layout';
import { ReactElement, ReactNode } from 'react';
import { NextPage } from 'next';

export type NextPageWithLayout<T> = NextPage<T> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

interface MyAppProps extends AppProps {
  Component: NextPageWithLayout<any>;
}

const queryClient = new ApolloClient({
  uri: 'http://localhost:8000/',
  cache: new InMemoryCache(),
});

export default function App({ Component, pageProps }: MyAppProps) {
  const getLayout = Component.getLayout ? Component.getLayout : (page: ReactNode) => page;
  return (
    <ApolloProvider client={queryClient}>
      <RecoilRoot>
        <Layout>{getLayout(<Component {...pageProps} />)}</Layout>
      </RecoilRoot>
    </ApolloProvider>
  );
}
