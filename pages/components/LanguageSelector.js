import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import styles from "../../styles/LanguageSelector.module.scss";
import LanguageIcon from "../../public/svg/language_icon.svg";
import { getCookie, setCookie } from "cookies-next";
import { useSyncLanguage } from 'ni18n'

const languages = [
  { code: 'pt', translateKey: 'portuguese' },
  { code: 'es', translateKey: 'spanish' },
  { code: 'en', translateKey: 'english' },
  { code: 'it', translateKey: 'italian' },
]

const LanguageSelector = () => {
  const { t, i18n } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)

  const toggleLangMenu = () => {
    setIsOpen(!isOpen)
  }

  const handleClick = (e) => {
    e.stopPropagation()
    toggleLangMenu()
  }

  const changeLanguage = (language) => {
    i18n.changeLanguage(language)
    toggleLangMenu()
    setCookie('lng', language)
  }

  const keyDownHandler = (e) => {
    if(e.code === 'Enter') {
      toggleLangMenu()
      if(e.target.dataset?.lang) {
        changeLanguage(e.target.dataset.lang)
      }
    }
  }

  // Set language from cookie when page is loaded
  useEffect(() => {
    const language = getCookie('lng');
    if (language) {
      i18n.changeLanguage(language)
    }
  }, [])

  return (
    <div
      className={`${styles.language__selector} ${isOpen ? styles.open : ''}`}
      onClick={handleClick}
      onKeyDown={keyDownHandler}
    >
      <LanguageIcon tabIndex={0} className={styles.langSvg}/>
      {isOpen && languages
        .map((language) => (
          <div
            tabIndex={0}
            autoFocus={i18n.language === language.code}
            className={i18n.language === language.code ? `btn ${styles.language__selector_item} ${styles.active}` : `btn ${styles.language__selector_item}`}
            onClick={ _ => changeLanguage(language.code)}
            key={language.code}
            data-lang={language.code}
          >
            {t(`navbar.language.${language.translateKey}`)}
          </div>
        ))
      }
    </div>
  )
}

export default LanguageSelector
