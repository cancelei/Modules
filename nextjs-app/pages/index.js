import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Link href="/api/hello">
        <a>Go to Hello API</a>
      </Link>
      <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
    </div>
  );
}

export async function getServerSideProps() {
  const fs = require('fs');
  const path = require('path');
  const blueprintPath = path.join(process.cwd(), 'Blueprint.md');
  const blueprint = fs.readFileSync(blueprintPath, 'utf8');

  return {
    props: {
      blueprint,
    },
  };
}