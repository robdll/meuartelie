import '../styles/globals.scss'
import Head from 'next/head'
import withI18n from "./i18n/withI18n";
import { useTranslation } from 'react-i18next'
import localFont from 'next/font/local'

const appFont = localFont({ 
  src: './fonts/Jokerman.woff2',
  variable: '--font-jokerman',
})


function MyApp({ Component, pageProps }) {
  const { t } = useTranslation();
  console.log(t('hello'));
  return <>
    <Head>
      <title>Meu Arteliê</title>
      <meta name="viewport"  key="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" key="description" content="Descubra as mandalas e seus significados. Aprenda a desegnar, colorir e manifestar." />
    </Head>
    <div className={appFont.className}>
      <Component {...pageProps}/>
    </div>
  </>
}

export default withI18n(MyApp)
