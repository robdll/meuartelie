

import React from "react";
import styles from '../../styles/About.module.scss'
import Image from 'next/image'
import Sign from "../../public/svg/signature.svg";
import { useTranslation } from 'react-i18next';

const About = _ => {
  const { t } = useTranslation();
  return (
    <div id="about" className={`section ${styles.about}`}>
      <div className={styles.image__container}>
        <Image
          src="/png/sobremim.webp"
          alt="Cintya Flores"
          fill
        />
      </div>
      <h2 className={`title ${styles.title}`}>{t('about.title')} </h2>
      <span className={`separator ${styles.separator}`}> </span>
      <p className={`paragraph ${styles.paragraph}`}>{t('about.text-1')}</p>
      <br />
      <p className={`paragraph ${styles.paragraph}`}>{t('about.text-2')}</p>
      <Sign className={`${styles.svg}`}></Sign>
      <p className={`paragraph ${styles.paragraph}`}>{t('about.signature')}</p>
    </div>
  )
};

export default About;


