

import React from "react";
import styles from '../../styles/About.module.scss'
import Image from 'next/image'
import Sign from "../../public/svg/signature.svg";

const About = _ => (
    <div id="about" className={`section ${styles.about}`}>
        <Image
            src="/png/sobremim.png"
            alt="Cintya Flores"
            width={312}
            height={300}
        />
        <div className={styles.container}>
            <h2 className={`title`}>Sobre Mim </h2>
            <span className={`separator`}> </span>
        </div>
         
        <p className={`paragraph`}>
            Sou uma buscadora, curiosa, atenta e sonhadora. No meu processo da busca pelo autoconhecimento, descobri, nas mandalas, um caminho para manifestar a minha capacidade de criação. Elas me trouxeram cura, de questões psicológicas, emocionais e até físicas, porque tudo, afinal é energia e as mandalas como símbolos sagrados, são portais de energia. 
        </p>
        <br />

        <p className={`paragraph`}>
            Vinda de uma trajetória acadêmica, com 20 anos de experiência em sala de aula, decidi, usar essa capacidade didática para ser uma facilitadora a fim de te apresentar um caminho de conexão entre você e seu Eu Superior!
            Espero que gostem!
        </p>
        <br />
        <Sign></Sign>
        <p className={`paragraph`}>Empreendedora, Treinadora, Facilitadora</p>
    </div>
);

export default About;


