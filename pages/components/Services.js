import React from "react";
import styles from '../../styles/Services.module.scss'
import MandalaArtIcon from "../../public/svg/mandalaart_icon.svg";
import VideoocurseIcon from "../../public/svg/videoocurse_icon.svg";
import ClassesIcon from "../../public/svg/reading_icon.svg";
import SelfknoledgeIcon from "../../public/svg/selfknoledge_icon.svg";
import Link from 'next/link'
import { useTranslation } from "react-i18next";

const Services = _ => {
  const { t } = useTranslation();
  return (
    <div id="services" className={`section ${styles.services}`}>
      <h2 className={`title`}>{t('services.title')}</h2>
      <span className={`separator ${styles.separator}`}> </span>
      <div className={styles.service__container}>
        <Link href="/services#art">
          <article className={styles.card}>
            <MandalaArtIcon className={styles.icon}></MandalaArtIcon>
            <h3 className={styles.service__name}>{t('services.card-1-title')} Art</h3>
            <div className={styles.more}>{t('services.card-2-description')} </div>
          </article>
        </Link>
        <Link href="/services#courses">
          <article className={styles.card}>
            <VideoocurseIcon className={styles.icon}></VideoocurseIcon>
            <h3 className={styles.service__name}>{t('services.card-1-title')} Aula</h3>
            <div className={styles.more}>{t('services.card-2-description')} </div>
          </article>
        </Link>
        <Link href="/services#reading">
          <article className={styles.card}>
            <ClassesIcon className={styles.icon}></ClassesIcon>
            <h3 className={styles.service__name}>{t('services.card-1-title')}</h3>
            <div className={styles.more}>{t('services.card-2-description')} </div>
          </article>
        </Link>
        <Link href="/services#workshop">
          <article className={styles.card}>
            <SelfknoledgeIcon className={styles.icon}></SelfknoledgeIcon>
            <h3 className={styles.service__name}>{t('services.card-1-title')}</h3>
            <div className={styles.more}>{t('services.card-2-description')} </div>
          </article>
        </Link>
      </div>
    </div>
  );
}

export default Services;


