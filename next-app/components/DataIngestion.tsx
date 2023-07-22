import React from 'react';
import { connectToDatabase } from '../lib/db';

class DataIngestion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    this.getData();
  }

  async getData() {
    const db = await connectToDatabase();
    const data = await db.collection('data').find().toArray();
    this.setState({ data });
  }

  render() {
    const { data } = this.state;
    return (
      <div>
        <h1>Data Ingestion Module</h1>
        <ul>
          {data.map((item, index) => (
            <li key={index}>{JSON.stringify(item)}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default DataIngestion;