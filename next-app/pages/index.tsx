import React from 'react';
import Head from 'next/head';
import DataIngestion from '../components/DataIngestion';

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Data Ingestion Module</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Welcome to the Data Ingestion Module</h1>
        <DataIngestion />
      </main>

      <footer>
        <p>© 2022 - AI for Small Businesses</p>
      </footer>
    </div>
  );
};

export default Home;