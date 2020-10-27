import React from "react";
import Head from 'next/head';
import PropTypes from 'prop-types';
import { ThemeProvider } from "styled-components";
import { GlobalStyles, Theme } from "../theme";
import { Layout } from "components";
import 'antd/dist/antd.css';
import "../assets/fonts/Poppins/stylesheet.css";
import "../assets/fonts/Rubik/stylesheet.css";

function MyApp({ Component, pageProps }) {
  return(
    <ThemeProvider theme={Theme}>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <GlobalStyles />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.object,
};

export default MyApp;
