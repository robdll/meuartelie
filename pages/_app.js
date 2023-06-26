import "../styles/globals.scss";
import Head from "next/head";
import { appWithI18Next, useSyncLanguage } from "ni18n";
import { ni18nConfig } from "../ni18n.config";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { setCookie, getCookie } from "cookies-next";
import LanguageDetector from "i18next-browser-languagedetector";
import i18next from "i18next";

i18next.use(LanguageDetector).init({
  detection: {
    order: [
      "querystring",
      "cookie",
      "navigator",
      "htmlTag",
      "path",
      "subdomain",
    ],
    caches: ["cookie"],
    lookupCookie: "lang",
  },
  fallbackLng: "pt",
});

function MyApp({ Component, pageProps }) {
  const { t, i18n } = useTranslation();

  const changeLanguage = () => {
    const locale = getCookie("lang");
    const urlParams = new URLSearchParams(window.location.search);
    const language = urlParams.get("lang");

    if (language) {
      setCookie("lang", language);
      i18n.changeLanguage(language);
    } else if (locale) {
      setCookie("lang", locale.slice(0, 2));
      i18n.changeLanguage(locale.slice(0, 2));
    } else {
      const detectedLanguage = i18next.language || "pt";
      setCookie("lang", detectedLanguage.slice(0, 2));
      i18n.changeLanguage(detectedLanguage.slice(0, 2));
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
