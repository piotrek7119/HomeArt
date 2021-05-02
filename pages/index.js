import styled from 'styled-components';
import Head from 'next/head';

import Layout from '../layout/layout.js';
import Hero from '../components/heroImage.js';
import About from '../components/about.js';
import Offer from '../components/offer.js';
import Realisation from '../components/realisations.js';

const Container = styled.section`

scroll-behavior: smooth;
overflow: hidden;

`;


const Home = () => {


  return (
    <Layout>
      <Container>
        <Head>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Hero image='/HeroImage.jpg'>PROFESJONALNE WYKOŃCZENIA WNĘTRZ</Hero>
        <About/>
        <Offer/>
        <Realisation/>
      </Container>
    </Layout>
  )
}

export default Home;
