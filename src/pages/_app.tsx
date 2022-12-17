import '@src/styles/globals.css';
import type { AppProps } from 'next/app';
import React from 'react';
import Layout from '../components/global/Layout';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
