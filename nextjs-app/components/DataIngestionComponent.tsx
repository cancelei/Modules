import React, { useState, useEffect } from "react";
// import { fetchData, scrapeData } from "../lib/api";
// import { connectToDB } from "../lib/db";

const DataIngestionComponent: React.FC = () => {
  const [data, setData] = useState(null);

  const ingestData = async () => {
    try {
      const result = await fetch("http://localhost:3000/api/dataIngestion", {})
        .then((R) => R.json())
        .then((R) => R);
      setData(result);
    } catch (error) {
      console.error("Error ingesting data:", error);
      // handle the error (e.g., set an error state, show an error message)
    }
  };

  useEffect(() => {
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
