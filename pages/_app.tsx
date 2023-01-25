import * as React from 'react';
import Head from 'next/head';
import { CacheProvider } from '@emotion/react';
import { createEmotionCache } from '../commons';
import { MyApp } from '../commons/types';
import { Layout } from '../components';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

const MyApp = (props: MyApp) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>Trip Planner</title>
        <meta name="description" content="Plan your vacation or road trip with ChatGPT" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CacheProvider>
  );
};

export default MyApp;
