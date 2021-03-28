import Head from 'next/head';
import Layout from '../layout/layout.js';
import Hero from '../components/heroImage.js';

export default function Home() {
  return (
    <Layout>
      <section>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Hero/>
      </section>
    </Layout>
  )
}
