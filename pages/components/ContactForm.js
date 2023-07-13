

import React, { useState } from "react";
import styles from '../../styles/ContactForm.module.scss';
import { useTranslation } from 'react-i18next';

const ContactForm = _ => {
  const { t } = useTranslation();
  const [contactName, onNameChange] = useState('');
  const [contactEmail, onEmailChange] = useState('');
  const [contactMessage, onMessageChange] = useState('');
  const [isSent, setSent] = useState(false);
  const [isErr, setErr] = useState();

  const submitContactForm = async function (event) {
    event.preventDefault();
    const body = {
      name: contactName,
      email: contactEmail,
      text: contactMessage
    };
    const response = await fetch(`/api/contact`, {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body),
    });
    if (response.ok) {
      onNameChange('');
      onEmailChange('');
      onMessageChange('');
      setSent(true);
    } else {
      setErr(true);
    }
  }

  return (
    <form id="contact" className={`section ${styles.contactform}`} onSubmit={submitContactForm}>
      <h2 className={`title`}>{t('contact.title')}</h2>
      <input value={contactName} onChange={e => { onNameChange(e.target.value); }} type="text" className={styles.subscribe__input} placeholder={t('contact.name-placeholder')} required />
      <input value={contactEmail} onChange={e => { onEmailChange(e.target.value); }} type="email" className={styles.subscribe__input} placeholder={t('contact.email-placeholder')} required />
      <input value={contactMessage} onChange={e => { onMessageChange(e.target.value); }} type="textarea" className={styles.subscribe__input} placeholder={t('contact.text-placeholder')} required />
      {isErr && t('contact.error')}
      <button type="submit" className={`btn ${styles.btn}`}>{isSent ? t('contact.button-sent') : t('contact.button-default')}</button>
    </form>
  )
}

export default ContactForm;


