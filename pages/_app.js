import "../styles/globals.scss";
import Head from "next/head";
import { appWithI18Next, useSyncLanguage } from "ni18n";
import { ni18nConfig } from "../ni18n.config";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import Cookies from 'js-cookie';

function MyApp({ Component, pageProps }) {
  const { t, i18n } = useTranslation();

  // useSyncLanguage(locale);

  const changeLanguage = () => {
    const locale = Cookies.get('MY_LANGUAGE');
    const urlParams = new URLSearchParams(window.location.search);
    const language = urlParams.get("lang");
    const browserLang = navigator.language || navigator.userLanguage; 

    if (language) {
      window.document.cookie = `MY_LANGUAGE=${language}`;
      i18n.changeLanguage(language);
    } else if (locale) {
      window.document.cookie = `MY_LANGUAGE=${locale}`;
      i18n.changeLanguage(locale);
    } else if(browserLang){
      window.document.cookie = `MY_LANGUAGE=${browserLang.slice(0,2)}`;
      i18n.changeLanguage(browserLang.slice(0,2) || en);
    }
  };

  useEffect(() => {
    changeLanguage();
  }, []);
  return (
    <>
      <Head>
        <title>{t("topHomeHeader1")}</title>
        <meta
          name="viewport"
          key="viewport"
          content="initial-scale=1.0, width=device-width"
        />
        <meta
          name="description"
          key="description"
          content="Descubra as mandalas e seus significados. Aprenda a desegnar, colorir e manifestar."
        />
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default appWithI18Next(MyApp, ni18nConfig);
