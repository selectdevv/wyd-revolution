import Head from 'next/head';
import React from 'react';

const Home: React.FC = (props) => {
  return (
    <>
      <Head>
        <title>WYD Revolution</title>
        <meta name="description" content="Home" />
      </Head>
      <div className="felx bg-black/50 rounded p-8 justify-items-center">
        <h1 className='text-5xl'>EM CONSTRUÇÃO</h1>
      </div>
    </>
  );
};

export default Home;
