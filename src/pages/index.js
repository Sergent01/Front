import Head from 'next/head'
import styles from '../styles/Home.module.scss'

import HeroHome from '../components/heroHome/HeroHome'
import Band1 from '../components/Bands/Band1/Band1'

export default function Home() {
  return (
    <div className={styles.index__main}>
      <Head>
        <title>SFAH</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <HeroHome/>
        <Band1/>
      </main>
    </div>
  )
}
