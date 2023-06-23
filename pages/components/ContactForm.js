

import React, { useState } from "react";
import styles from '../../styles/ContactForm.module.scss'
import { useTranslation } from "react-i18next";
const BTN_SEND = "Enviar";
const BTN_SENT = "Enviado";

const ContactForm = _ => {
    const { t } = useTranslation();
    const [contactName, onNameChange] = useState('');
    const [contactEmail, onEmailChange] = useState('');
    const [contactMessage, onMessageChange] = useState('');
    const [btnCopy, setCopy] = useState(BTN_SEND);
    const [sendErr, setErr] = useState('');
    
    const submitContactForm = async function (event) {
        event.preventDefault();
        const body = {
            name: contactName, 
            email: contactEmail, 
            text: contactMessage
        }
        const response = await fetch(`/api/contact`, {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        });
        if(response.ok) {
            onNameChange('');
            onEmailChange('');
            onMessageChange('');
            setCopy(BTN_SENT);
        } else {
            setErr('Error on email send, try later');
        }
    }
        
    return (
        <form id="contact" className={`section ${styles.contactform}`} onSubmit={submitContactForm}>
            <h2 className={`title`}>{t("contactTitle")}</h2>
            <input value={contactName} onChange={ e => { onNameChange(e.target.value);} } type="text" className={styles.subscribe__input} placeholder={t("contactSubTitle1")} required/>
            <input value={contactEmail} onChange={ e => { onEmailChange(e.target.value);} } type="email" className={styles.subscribe__input} placeholder={t("contactSubTitle2")} required/>
            <input value={contactMessage} onChange={ e => { onMessageChange(e.target.value);} } type="textarea" className={styles.subscribe__input} placeholder={t("contactSubTitle3")} required/>
            {sendErr}
            <button type="submit" className={`btn ${styles.btn}`}>{btnCopy}</button>
        </form>
    )
}

export default ContactForm;


