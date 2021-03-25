import Head from 'next/head';
import Layout from '../layout/layout.js';

export default function Home() {
  return (
    <Layout>
      <section>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
      </section>
    </Layout>
  )
}
