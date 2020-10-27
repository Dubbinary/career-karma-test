import React from "react";
import Head from 'next/head';
import { ReviewForm } from 'components';

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ReviewForm />
    </>

  );
}
