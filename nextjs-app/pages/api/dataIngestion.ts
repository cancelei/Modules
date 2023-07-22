import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../lib/mongodb';
import { fetchDataFromAPI } from '../../lib/api';
import { scrapeDataFromWebsite } from '../../lib/scrape';

export default async function dataIngestion(req: NextApiRequest, res: NextApiResponse, collectionName: string) {
  const db = await connectToDatabase();
  const dataCollection = db.collection(collectionName);

  // Fetch data from API
  const apiData = await fetchDataFromAPI();
  await dataCollection.insertMany(apiData);

  // Scrape data from website
  const scrapedData = await scrapeDataFromWebsite();
  await dataCollection.insertMany(scrapedData);

  res.status(200).json({ message: 'Data ingestion successful' });
}
