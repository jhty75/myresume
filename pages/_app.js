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
        <title>L'univers de Jean-Hugues Pam, Développeur full stack junior React JS, React Native, Node JS</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
