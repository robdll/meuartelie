

import React, { useState } from "react";
import styles from '../../styles/Header.module.scss'
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

function ServicesHeader() {
  const { t } = useTranslation();
  const [offset, setOffset] = useState(0);
  const [width, setWidth] = useState(0);

  function handleHover(e) {
    setOffset(e.nativeEvent.toElement.offsetLeft)
    setWidth(e.nativeEvent.toElement.offsetWidth);
  }

  return (
    <div className={`section ${styles.service}`}>
      <h2 className={`title ${styles.service__title}`}>Meus Serviços</h2>
      <div className={styles.service_link__container}>
        <div className={styles.marker} style={{ left: `${offset}px`, width: `${width}px`, }} ></div>
        <span className={styles.link} onMouseEnter={handleHover}><Link href="/services#art">{t('services.card-1-title')}</Link></span>
        <span className={styles.link} onMouseEnter={handleHover}><Link href="/services#courses">{t('services.card-2-title')}</Link></span>
        <span className={styles.link} onMouseEnter={handleHover}><Link href="/services#reading">{t('services.card-3-title')}</Link></span>
        <span className={styles.link} onMouseEnter={handleHover}><Link href="/services#workshop">{t('services.card-4-title')}</Link></span>
      </div>
    </div>
  );
}
export default ServicesHeader;
