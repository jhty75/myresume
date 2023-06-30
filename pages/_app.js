import '../styles/globals.css';
import Head from 'next/head';
import ReactGA from 'react-ga';
import { useEffect } from 'react';





function App({ Component, pageProps }) {
  useEffect(() =>{
    ReactGA.initialize('G-CMDHENFJ9K');
    ReactGA.pageview('/')
  }, []);
  return (
    <>
      <Head>
        <title>Next.js App</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
