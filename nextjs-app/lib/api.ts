import axios from 'axios';
import { MongoClient } from 'mongodb';

// Load environment variables from .env file
import dotenv from 'dotenv';
dotenv.config();

// Get database URI and name from environment variables
const DB_URI = process.env.DB_URI;
const DB_NAME = process.env.DB_NAME;

export async function fetchDataFromAPI(apiUrl: string) {
  try {
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    console.error(`Error fetching data from API: ${error}`);
  }
}

export async function saveDataToDatabase(data: any, collectionName: string) {
  try {
    const client = new MongoClient(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    await client.connect();
    const db = client.db(DB_NAME);
    const collection = db.collection(collectionName);
    await collection.insertOne(data);
    await client.close();
  } catch (error) {
    console.error(`Error saving data to database: ${error}`);
  }
}
