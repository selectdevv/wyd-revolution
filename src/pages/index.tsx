import Head from 'next/head';
import React from 'react';

const Home: React.FC = (props) => {
  return (
    <>
      <Head>
        <title>WYD Revolution</title>
        <meta name="description" content="Home" />
      </Head>
      <div className="justify-items-center w-full">
        <h1>Home</h1>
      </div>
    </>
  );
};

export default Home;
