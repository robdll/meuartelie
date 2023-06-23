import '../styles/globals.scss'
import Head from 'next/head'
import withI18n from "./i18n/withI18n";
import { useTranslation } from 'react-i18next'

function MyApp({ Component, pageProps }) {
  const { t } = useTranslation();
  return <>
    <Head>
      <title>Meu Arteliê {t('hello')}</title>
      <meta name="viewport"  key="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" key="description" content="Descubra as mandalas e seus significados. Aprenda a desegnar, colorir e manifestar." />
    </Head>
       
    <Component {...pageProps} />
  </>
}

export default withI18n(MyApp)
