import { NextApiRequest, NextApiResponse } from 'next'
import { connectToDatabase } from '../../lib/db'

export default async function dataIngestion(req: NextApiRequest, res: NextApiResponse) {
  const db = await connectToDatabase()

  if (req.method === 'POST') {
    // Ingest data from the request body
    const data = req.body

    // Save the data to the database
    const result = await db.collection('data').insertOne(data)

    res.status(200).json({ success: true, data: result.ops[0] })
  } else {
    // Handle any other HTTP method
    res.setHeader('Allow', ['POST'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}