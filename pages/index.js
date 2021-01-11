import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from './components/Navbar'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Meuartelie</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Navbar></Navbar>

      <main className={styles.main}>

      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
