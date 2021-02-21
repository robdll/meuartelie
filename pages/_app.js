import '../styles/globals.scss'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return <>
    <Head>
      <title>Meu Arteliê</title>
      <meta name="viewport"  key="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" key="description" content="Descubra as mandalas e seus significados. Aprenda a desegnar, colorir e manifestar." />
    </Head>
       
    <Component {...pageProps} />
  </>
}

export default MyApp
