

import React, { useState } from "react";
import styles from '../../styles/ContactForm.module.scss'

const ContactForm = _ => {
    const [contactName, onNameChange] = useState('');
    const [contactEmail, onEmailChange] = useState('');
    const [contactSubject, onSubjectChange] = useState('');
    const [contactMessage, onMessageChange] = useState('');
    
    const submitContactForm = () => {
        console.log(contactName, contactEmail, contactSubject, contactMessage);
    }

    return (
        <form id="contact" className={`section ${styles.contactform}`} onSubmit={submitContactForm}>
            <h2 className={`title`}>Contate-Me</h2>
            <input value={contactName} onChange={ e => { onNameChange(e.target.value);} } type="text" className={styles.subscribe__input} placeholder="Seu Nome" required/>
            <input value={contactEmail} onChange={ e => { onEmailChange(e.target.value);} } type="email" className={styles.subscribe__input} placeholder="Insira o endereço de e-mail" required/>
            <input value={contactSubject} onChange={ e => { onSubjectChange(e.target.value);} } type="text" className={styles.subscribe__input} placeholder="Sujeita" required/>
            <input value={contactMessage} onChange={ e => { onMessageChange(e.target.value);} } type="textarea" className={styles.subscribe__input} placeholder="Seu Texto Aqui" required/>
            <button type="submit" className={`btn ${styles.btn}`}>Enviar</button>
        </form>
    )
}

export default ContactForm;


