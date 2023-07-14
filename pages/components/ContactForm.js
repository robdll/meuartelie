

import React, { useState } from "react";
import styles from '../../styles/ContactForm.module.scss';
import { useTranslation } from 'react-i18next';

const ContactForm = _ => {
  const { t } = useTranslation();
  const [isSent, setSent] = useState(false);
  const [isErr, setErr] = useState();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })
  const fields = [
    { name: 'name', type: 'text', placeholder: `contact.name-placeholder` },
    { name: 'email', type: 'email', placeholder: `contact.email-placeholder` },
    { name: 'message', type: 'textarea', placeholder: `contact.textareaa-placeholder` },
  ]

  const handleInput = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;
    setFormData((prevState) => ({
      ...prevState,
      [fieldName]: fieldValue
    }));
  }

  const submitForm = (e) => {
    // avoid page refresh
    e.preventDefault()

    const formURL = e.target.action

    fetch(formURL, {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        'accept': 'application/json',
        "Content-Type": "application/json"
      },
    }).then(() => {
      setFormData({
        name: "",
        email: "",
        message: ""
      });
      setSent(true);
    }).catch(() => {
      setErr(true);
    })

  }

  return (
    <form
      id="contact"
      className={`section ${styles.contactform}`}
      method="post"
      action="/api/contact"
      onSubmit={submitForm}
    >
      <h2 className={`title`}>{t('contact.title')}</h2>
      {
        fields.map((field, i) => (
          <input
            key={i}
            className={styles.subscribe__input}
            name={field.name}
            type={field.type}
            placeholder={t(field.placeholder)}
            required
          />
        ))
      }
      {isErr && t('contact.error')}
      <button
        type="submit"
        className={`btn ${styles.btn}`}>{t(`contact.button-${isSent ? 'sent' : 'default'}`)}</button>
    </form>
  )
}

export default ContactForm;


