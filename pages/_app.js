import React from 'react';
import Head from 'next/head';
import './app.scss';

// Needs to be in MyApp, otherwise we might lost the state of lastPageComponent when app changes pages
export default function MyApp(params) {
  // == Google analytics track page navigations ==
  // const handleRouteChange = (url) => {
  //   window.gtag('config', 'G-RDXV7CG97T', {
  //     page_path: url,
  //   });
  // };
  // useEffect(() => {
  //   router.events.on('routeChangeComplete', handleRouteChange);
  //   return () => {
  //     router.events.off('routeChangeComplete', handleRouteChange);
  //   };
  // }, [router.events]);

  const { Component: PageComponent, pageProps } = params;
  return (
    <>
      <Head>
        {/*
          Disable input zooming on iOS devices
          Can't be put in _document.js - https://nextjs.org/docs/messages/no-document-viewport-meta
        */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/*
          Can't be put in _document.js - https://nextjs.org/docs/messages/no-document-title
        */}
        <title>{"Art of JD Bigger - Portraits, Figures, and Fantasies"}</title>
      </Head>
      <PageComponent {...pageProps} />
    </>
  );
}