import React, { useState, useEffect } from "react";
import Head from "next/head";
import DataIngestionComponent from "./DataIngestionComponent";
import "../styles/globals.css";

const Home: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [scrapingStatus, setScrapingStatus] = useState(null);

  const startScraping = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/startScraping");
      // Handle the response...
    } catch (err) {
      console.error(err);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    const fetchScrapingStatus = async () => {
      const response = await fetch("/api/scrapingStatus");
      const data = await response.json();
      setScrapingStatus(data);
    };

    fetchScrapingStatus();
  }, []);

  return (
    <div>
      <Head>
        <title>Data Ingestion Module</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Welcome to the Data Ingestion Module</h1>
        <button onClick={startScraping} disabled={isLoading}>
          {isLoading ? "Scraping..." : "Start Scraping"}
        </button>
        {scrapingStatus && (
          <div>
            <h2>Scraping Status</h2>
            <p>Last ran: {scrapingStatus.lastRan}</p>
            <p>Items scraped: {scrapingStatus.itemsScraped}</p>
            {/* Display other status information... */}
          </div>
        )}
        <DataIngestionComponent />
      </main>

      <footer>
        <p>© 2022 - Data Ingestion Module</p>
      </footer>
    </div>
  );
};

export default Home;
