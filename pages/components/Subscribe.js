import React, { useState } from "react";
import styles from '../../styles/Subscribe.module.scss'
import Image from 'next/image'
import { useTranslation } from 'react-i18next'

function Subscribe(_) {
  const { t } = useTranslation();
  const [subscribedMsg, setSubscribed] = useState();

  const subbing = async function subbing(e) {
    setSubscribed(null);
    e.preventDefault()
    const body = {
      email_address: e.target.sub_email.value,
    }
    const response = await fetch(`/api/subscribe`, {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    });
    if (response.ok) {
      setSubscribed('success');
    } else {
      setSubscribed('error');
    }

  }

  return (
    <div id="subscribe" className={`section ${styles.subscribe}`}>
      <h2 className={`title ${styles.subscribe__title}`}>{t('newsletter.title')}</h2>
      <span className={`separator ${styles.separator}`}> </span>
      <div className={styles.subscribe__photo}>
        <Image
          src="/png/subscribe.webp"
          alt="gift mandala"
          fill
        />
      </div>
      <p className={styles.subscribe__copy}>{t('newsletter.text')}</p>
      <form className={`${styles.form}`} onSubmit={subbing}>
        <label className={`${styles.label}`} htmlFor="sub_email">Email</label>
        <input id="sub_email" type="email" autoComplete="email" className={styles.subscribe__input} placeholder={t('newsletter.placeholder')} required />
        {
          typeof subscribedMsg === 'string' && (
            <span className={styles.subscribe__response}>{t(`newsletter.${subscribedMsg}`)}</span>
          )
        }
        <button type="submit" className={`btn ${styles.btn}`}>{t('newsletter.button')}</button>
      </form>

    </div>
  );
}

export default Subscribe;


