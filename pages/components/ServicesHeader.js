

import React from "react";
import styles from '../../styles/Header.module.scss'
import Link from 'next/link';

/** TODO add follogin animation https://www.youtube.com/watch?v=KwoSm0E8MOE&ab_channel=CodingNepal */
const ServicesHeader = _ => (
    <div className={`section ${styles.service}`}>
        <h2 className="title">Meus Serviços</h2>
        <div className={styles.service_link}> 
            <Link href="/services#art">Art </Link>
            <Link href="/services#selfknowledge">Autoconhecimento</Link>
            <Link href="/services#courses">Video</Link>
            <Link href="/services#reading">Leitura</Link>
        </div>
    </div>

);

export default ServicesHeader;


