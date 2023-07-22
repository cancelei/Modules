import React from 'react';
import Head from 'next/head';
import DataIngestionComponent from '../components/DataIngestionComponent';
import '../styles/globals.css';

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Data Ingestion Module</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Welcome to the Data Ingestion Module</h1>
        <DataIngestionComponent />
      </main>

      <footer>
        <p>© 2022 - Data Ingestion Module</p>
      </footer>
    </div>
  );
};

export default Home;