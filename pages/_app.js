import '../styles/globals.css';
import ReactGA from 'react-ga';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';


const TRACKING_ID = "G-CMDHENFJ9K"; // my Google tracking ID
ReactGA.initialize(TRACKING_ID);



function App({ Component, pageProps }) {

  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      ReactGA.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, []);


  return (
    <>
      <Head>
        <title></title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
