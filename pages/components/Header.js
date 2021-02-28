

import React from "react";
import styles from '../../styles/Header.module.scss'
import Image from 'next/image'
import Link from 'next/link'

const Header = _ => (
    <div className={`section ${styles.header}`}>
        <div className={styles.image__container}>
            <Image
                src="/png/mandalabothlayer.webp"
                alt="Author's Mandala art"
                width={810}
                height={810}
                layout="responsive"
                priority="true"
            />
        </div>
        <div className={styles.info__container}>
            <h1 className={styles.title}>Meu Arteliê</h1>
            <h2 className={styles.subtitle}>Cocriando uma versão melhor de Gaia através da energia das mandalas.</h2>
            <Link href="#services">
                <div className={`btn ${styles.btn}`}>Ver Servicos</div>
            </Link>
        </div>
    </div>

);

export default Header;


