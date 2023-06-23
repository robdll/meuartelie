import styles from "../../styles/Navbar.module.scss";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";

const changeLanguage = (i18n, language) => {
  window.document.cookie = "MY_LANGUAGE="+language
  i18n.changeLanguage(language);
};

const languages = [
  { code: "pt", translateKey: "Portuguese" },
  { code: "en", translateKey: "english" },
];

const Menu = (props) => {
  const router = useRouter();
  const { t, i18n } = useTranslation();
  const goTo = (destination) => {
    let options = {
      shallow: router.pathname.includes("contact"),
    };
    router
      .push(destination, undefined, options)
      .then(() => window.scrollTo(0, 0));
    props.toggleMenu(!props.toggle);
  };

  return (
    <div
      key="1"
      className={
        props.toggle
          ? `${styles.menu__container} ${styles.toggle}`
          : `${styles.menu__container}`
      }
    >
      <div className={`${styles.menu__content}`}>
        <ul className={`${styles.menu__list}`}>
          <li className={`${styles.menu__item}`} onClick={() => goTo("/")}>
            <span>{t("topSliderMenu1")}</span>
          </li>
          <li
            className={`${styles.menu__item}`}
            onClick={() => goTo("/services")}
          >
            <span>{t("topSliderMenu2")} </span>
          </li>
          <li
            className={`${styles.menu__item}`}
            onClick={() => goTo("/services#contact")}
          >
            <span>{t("topSliderMenu3")} </span>
          </li>
        </ul>
        <div>
          {languages.map((language) => (
            <button
              data-id={`${language.code}-button`}
              // className={i18n.language === language.code ? "active" : undefined}
              onClick={() => changeLanguage(i18n, language.code, router)}
              key={language.code}
            >
              {t(language.translateKey)}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
