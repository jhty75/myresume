import '../styles/globals.css';
import { GoogleAnalytics } from "nextjs-google-analytics";
import React from 'react';


function App({ Component, pageProps }) {
  return (
    <>
     <GoogleAnalytics trackPageViews gaMeasurementId="G-CMDHENFJ9K" />
      <Component {...pageProps} />
    </>
  );
}

export default App;
