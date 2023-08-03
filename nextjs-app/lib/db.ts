import { MongoClient, Db } from "mongodb";

// Get database URI and name from environment variables
const DB_URI = process.env.DATABASE_URI;
const DB_NAME = process.env.DATABASE_NAME;

let cachedDb: Db;

export async function connectToDatabase() {
  if (cachedDb) {
    return cachedDb;
  }

  const client = await MongoClient.connect(DB_URI);

  const db = client.db(DB_NAME);
  cachedDb = db;
  return db;
}
