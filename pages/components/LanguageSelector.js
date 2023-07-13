import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import styles from "../../styles/LanguageSelector.module.scss";
import LanguageIcon from "../../public/svg/language_icon.svg";

import { useSyncLanguage } from 'ni18n'

const languages = [
  { code: 'pt', translateKey: 'portuguese' },
  { code: 'en', translateKey: 'english' },
  { code: 'it', translateKey: 'italian' },
]

const LanguageSelector = () => {
  const { t, i18n } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = (e) => {
    e.stopPropagation()
    setIsOpen(!isOpen)
  }

  const changeLanguage = (language) => {
    i18n.changeLanguage(language)
    setIsOpen(!isOpen)
  }


  return (
    <div
      className={`${styles.language__selector} ${isOpen ? styles.open : ''}`} 
      onClick={handleClick}
    >
      {!isOpen && <LanguageIcon />}
      {isOpen && languages
        .filter( language => language.code !== i18n.language)
        .map((language) => (
          <div
            className={i18n.language === language.code ? `btn ${styles.language__selector_item}`  : `btn ${styles.language__selector_item}`}
            onClick={() => changeLanguage(language.code)}
            key={language.code}
          >
            {t(`navbar.language.${language.translateKey}`)}
          </div>
        ))
      }
    </div>
  )
}

export default LanguageSelector
