import Head from 'next/head'
import Footer from '../components/footer'
import styles from '../styles/Home.module.css'

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
