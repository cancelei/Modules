import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../lib/db';
import { fetchDataFromAPI } from '../../lib/api';
import { scrapeDataFromWebsite } from '../../lib/scrape';

export default async function dataIngestion(req: NextApiRequest, res: NextApiResponse) {
  const db = await connectToDatabase();
  const dataCollection = db.collection('data');

  // Fetch data from API
  const apiData = await fetchDataFromAPI();
  await dataCollection.insertMany(apiData);

  // Scrape data from website
  const scrapedData = await scrapeDataFromWebsite();
  await dataCollection.insertMany(scrapedData);

  res.status(200).json({ message: 'Data ingestion successful' });
}