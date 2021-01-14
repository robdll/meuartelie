

import React from "react";
import styles from '../../styles/ContactForm.module.scss'

const ContactForm = _ => (
    <div id="contact" className={`section ${styles.contactform}`}>
        <h2 className={`title`}>Contate-Me</h2>
        <input type="text" className={styles.subscribe__input} placeholder="Seu Nome"/>
        <input type="email" className={styles.subscribe__input} placeholder="Insira o endereço de e-mail"/>
        <input type="text" className={styles.subscribe__input} placeholder="Sujeita"/>
        <input type="textarea" className={styles.subscribe__input} placeholder="Seu Texto Aqui"/>
        <div className={`btn ${styles.btn}`}>Enviar</div>
    </div>
);

export default ContactForm;


