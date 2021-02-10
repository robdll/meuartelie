

import React from "react";
import styles from '../../styles/Header.module.scss'
import Image from 'next/image'
import Link from 'next/link'

const Header = _ => (
    <div className={`section ${styles.header}`}>
        {/** TODO fix responsive sizes
         * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-sizes
         * also original image size 936 * 900 ~900kb
        */}
        <Image
            src="/png/mandalabothlayer.png"
            alt="Author's Mandala art"
            width={312}
            height={300}
        />
        <h1 className={styles.title}>Meu Arteliê</h1>
        <h2 className={styles.subtitle}>Cocriando uma versão melhor de Gaia através da energia das mandalas.</h2>
        <Link href="#services">
            <div className={"btn"}>Explorar Servicos</div>
        </Link>
    </div>

);

export default Header;


