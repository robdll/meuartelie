

import React from "react";
import styles from '../../styles/Subscribe.module.scss'
import Image from 'next/image'

const Subscribe = _ => (
    <div id="subscribe" className={`section ${styles.subscribe}`}>
        <h2 className={`title`}>Inscreva-se</h2>
        <span className={`separator ${styles.separator}`}> </span>
        <div className={styles.subscribe__photo}>
            <Image
                src="/png/subscribe.png"
                alt="gift mandala"
                width={120}
                height={243}
            />
        </div>
        <p className={styles.subscribe__copy}>Aproveite esta mandala prontinha para imprimir e deixe este portal iluminar sua casa! As intenções desta mandala são equilíbrio, cura e sabedoria!</p>
        <input type="email" className={styles.subscribe__input}  placeholder="Insira o endereço de e-mail"/>
        <div className={`btn ${styles.btn}`}>Subscreva</div>
    </div>
);

export default Subscribe;


