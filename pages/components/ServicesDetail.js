import React from "react";
import styles from "../../styles/ServicesDetail.module.scss";
import Image from "next/image";
import { useTranslation } from 'react-i18next';

const ServicesDetail = (_) => {
  const { t } = useTranslation();
  return (
    <div>
      <section id='art' className={`section ${styles.details}`} id='art'>
        <h3 className={`title ${styles.title}`}>{t('services.card-1-title')}</h3>
        <span className={`separator ${styles.separator}`}> </span>
        <div className={styles.image__container}>
          <Image
            className='videoplaceholder'
            src='/png/videocover.png'
            alt='Art Service image'
            width={312}
            height={300}
          />
        </div>
        <div className={styles.info__container}>
          <p className={`paragraph ${styles.paragraph} ${styles.spacer}`}>
            {t('services.card-1-longtext-1')}
          </p>
          <br />
          <p className={`paragraph ${styles.paragraph}`}>
            {t('services.card-1-longtext-2')}
          </p>
        </div>
      </section>

      <section
        id='courses'
        className={`section ${styles.details} ${styles.mirror}`}
      >
        <h3 className={`title ${styles.title}`}>Video Aulas</h3>
        <span className={`separator ${styles.separator}`}> </span>
        <div className={styles.image__container}>
          <Image
            className='videoplaceholder'
            src='/png/videocover.png'
            alt='Art Service image'
            width={312}
            height={300}
          />
        </div>
        <div className={styles.info__container}>
          <p className={`paragraph ${styles.paragraph} ${styles.spacer}`}>
            {t('services.card-2-longtext-1')}
          </p>
          <br />
          <p className={`paragraph ${styles.paragraph}`}>
            {t('services.card-2-longtext-2')}
          </p>
        </div>
      </section>

      <section id='reading' className={`section ${styles.details}`}>
        <h3 className={`title ${styles.title}`}>Consulta</h3>
        <span className={`separator ${styles.separator}`}> </span>
        <div className={styles.image__container}>
          <Image
            className='videoplaceholder'
            src='/png/videocover.png'
            alt='Art Service image'
            width={312}
            height={300}
          />
        </div>
        <div className={styles.info__container}>
          <p className={`paragraph ${styles.paragraph} ${styles.spacer}`}>
            {t('services.card-3-longtext-1')}

          </p>
          <br />
          <p className={`paragraph ${styles.paragraph}`}>
            {t('services.card-3-longtext-2')}

          </p>
        </div>
      </section>

      <section
        id='workshop'
        className={`section ${styles.details} ${styles.mirror}`}
      >
        <h3 className={`title ${styles.title}`}>Workshop</h3>
        <span className={`separator ${styles.separator}`}> </span>
        <div className={styles.image__container}>
          <Image
            className='videoplaceholder'
            src='/png/videocover.png'
            alt='Art Service image'
            width={312}
            height={300}
          />
        </div>
        <div className={styles.info__container}>
          <p className={`paragraph ${styles.paragraph} ${styles.spacer}`}>
            {t('services.card-4-longtext-1')}

          </p>
          <ul className={`paragraph ${styles.paragraph}`}>
            <li>{t('services.card-4-list-1')}</li>
            <li>{t('services.card-4-list-2')}</li>
            <li>{t('services.card-4-list-3')}</li>
            <span>{t('services.card-4-sublist-1')}</span> <br />
            <span>{t('services.card-4-sublist-2')}</span> <br />
            <span>{t('services.card-4-sublist-3')}</span> <br />
            <span>{t('services.card-4-sublist-4')}</span>
          </ul>
          <p className={`paragraph ${styles.paragraph}`}>
            {t('services.card-4-longtext-2')}
          </p>
        </div>
      </section>
    </div>
  );
}

export default ServicesDetail;
