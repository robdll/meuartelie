import React, { useState } from "react";
import styles from '../../styles/Subscribe.module.scss'
import Image from 'next/image'
import { useTranslation } from "react-i18next";
function Subscribe (_) {
    const { t } = useTranslation();
    const [subscribedMsg, setSubscribed] = useState(false);
    
    const subbing = async function subbing(e) {
        setSubscribed(undefined);
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
        if(response.ok) {
            setSubscribed("Prontinho, agora acesse seu email!");
        } else {
            setSubscribed("Este E-mail já foi cadastrado");
        }

    }

    return (
        <div id="subscribe" className={`section ${styles.subscribe}`}>
        <h2 className={`title ${styles.subscribe__title}`}>
          {t("subscribeTitle")}
        </h2>
        <span className={`separator ${styles.separator}`}> </span>
        <div className={styles.subscribe__photo}>
          <Image
            src="/png/subscribe.webp"
            alt="gift mandala"
            width={328}
            height={667}
          />
        </div>
        <p className={styles.subscribe__copy}>{t("subscribeSubTitle")}</p>
  
        <form className={`${styles.form}`} onSubmit={subbing}>
          <label className={`${styles.label}`} htmlFor="sub_email">
            Email
          </label>
          <input
            id="sub_email"
            type="email"
            autoComplete="email"
            className={styles.subscribe__input}
            placeholder={t("subscribeInputField")}
            required
          />
          {subscribedMsg ? (
            <span className={styles.subscribe__response}>{subscribedMsg}</span>
          ) : (
            ""
          )}
          <button type="submit" className={`btn ${styles.btn}`}>
            {t("subscribeButton")}
          </button>
        </form>
      </div>
    );
}

export default Subscribe;


