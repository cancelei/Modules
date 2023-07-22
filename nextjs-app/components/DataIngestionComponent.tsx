import React, { useState, useEffect } from 'react';
import { fetchData, scrapeData } from '../lib/api';
import { connectToDB } from '../lib/db';

const DataIngestionComponent: React.FC = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const ingestData = async () => {
      const db = await connectToDB();
      const apiData = await fetchData();
      const scrapedData = await scrapeData();

      const allData = [...apiData, ...scrapedData];
      allData.forEach(async (item) => {
        await db.collection('data').insertOne(item);
      });

      setData(allData);
    };

    ingestData();
  }, []);

  return (
    <div>
      <h1>Data Ingestion Module</h1>
      {data ? (
        <div>
          <h2>Data successfully ingested</h2>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      ) : (
        <h2>Ingesting data...</h2>
      )}
    </div>
  );
};

export default DataIngestionComponent;