import Head from 'next/head';

import Layout from '../layout/layout.js';
import Hero from '../components/heroImage.js';
import About from '../components/about.js';
import Offer from '../components/offer.js';
import Realisation from '../components/realisations.js';

const Home = () => {
  return (
    <Layout>
      <section>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Hero/>
        <About/>
        <Offer/>
        <Realisation/>
      </section>
    </Layout>
  )
}

export default Home;
