import { MongoClient } from 'mongodb';

const uri = process.env.DATABASE_URI || '';
const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
};

let db: any;

export async function connectToDB() {
  if (db) return db;

  const client = new MongoClient(uri, options);
  db = client.db(process.env.DATABASE_NAME);

  return db;
}

export async function disconnectFromDB() {
  if (!db) return true;

  await db.close();
  db = undefined;

  return true;
}