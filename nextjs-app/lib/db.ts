import { MongoClient } from 'mongodb';

// Load environment variables from .env file
import dotenv from 'dotenv';
dotenv.config();

// Get database URI and name from environment variables
const DB_URI = process.env.DATABASE_URI;
const DB_NAME = process.env.DATABASE_NAME;

let cachedDb = null;

export async function connectToDatabase() {
  if (cachedDb) {
    return cachedDb;
  }

  const client = await MongoClient.connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const db = client.db(DB_NAME);
  cachedDb = db;
  return db;
}
