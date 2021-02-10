import React, { useState } from "react";
import styles from '../../styles/Subscribe.module.scss'
import Image from 'next/image'

function Subscribe (_) {

    const [subscribedMsg, setSubscribed] = useState(false);
    
    const subbing = async function subbing(e) {
        setSubscribed(undefined);
        e.preventDefault() 
        const body = {
            email_address: event.target.sub_email.value,
        }
        const response = await fetch(`/api/subscribe`, {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        });
        if(response.ok) {
            setSubscribed("Subscribed");
        } else {
            setSubscribed("err");
        }

    }

    return (
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
            
            <form className={`${styles.form}`} onSubmit={subbing}>
                <label className={`${styles.label}`} for="sub_email">Email</label>
                <input id="sub_email" type="email" autoComplete="email" className={styles.subscribe__input} placeholder="Insira o endereço de e-mail" required/>
                { subscribedMsg ? <span className={styles.subscribe__response}>{subscribedMsg}</span> : ''}
                <button type="submit" className={`btn ${styles.btn}`}>Subscreva</button>
            </form>
            
        </div>
    );
}

export default Subscribe;


