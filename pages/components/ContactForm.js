

import React, { useState } from "react";
import styles from '../../styles/ContactForm.module.scss'

const BTN_SEND = "Enviar";
const BTN_SENT = "Enviado";

const ContactForm = _ => {
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
            <h2 className={`title`}>Contate-Me</h2>
            <input value={contactName} onChange={ e => { onNameChange(e.target.value);} } type="text" className={styles.subscribe__input} placeholder="Seu Nome" required/>
            <input value={contactEmail} onChange={ e => { onEmailChange(e.target.value);} } type="email" className={styles.subscribe__input} placeholder="Insira o endereço de e-mail" required/>
            <input value={contactMessage} onChange={ e => { onMessageChange(e.target.value);} } type="textarea" className={styles.subscribe__input} placeholder="Seu Texto Aqui" required/>
            {sendErr}
            <button type="submit" className={`btn ${styles.btn}`}>{btnCopy}</button>
        </form>
    )
}

export default ContactForm;


