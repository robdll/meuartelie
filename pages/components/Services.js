import React from "react";
import styles from '../../styles/Services.module.scss'
import MandalaArtIcon from "../../public/svg/mandalaart_icon.svg";
import VideoocurseIcon from "../../public/svg/videoocurse_icon.svg";
import ClassesIcon from "../../public/svg/reading_icon.svg";
import SelfknoledgeIcon from "../../public/svg/selfknoledge_icon.svg";
import Link from 'next/link'


//* TODO: add animation underline similar to https://www.youtube.com/watch?v=KwoSm0E8MOE&t=47s&ab_channel=CodingNepal */
const Services = _ => (
    <div id="services" className={`section ${styles.services}`}>
        <h2 className={`title`}> Meus Serviços</h2>
        <span className={`separator ${styles.separator}`}> </span>
        <div className={styles.service__container}>
            <article className={styles.card}>
                <MandalaArtIcon className={styles.icon}></MandalaArtIcon>
                <h5 className={styles.service__name}>Mandala Art</h5>
                <Link href="/services#art"><div className={styles.more}> Veja Mais </div></Link>
            </article>
            <article className={styles.card}>
                <VideoocurseIcon className={styles.icon}></VideoocurseIcon>
                <h5 className={styles.service__name}>Video Curso</h5>
                <Link href="/services#courses"><div className={styles.more}> Veja Mais </div></Link>
            </article>
            <article className={styles.card}>
                <ClassesIcon className={styles.icon}></ClassesIcon>
                <h5 className={styles.service__name}>Leitura e Interpretação</h5>
                <Link href="/services#reading"><div className={styles.more}> Veja Mais </div></Link>
            </article>
            <article className={styles.card}>
                <SelfknoledgeIcon className={styles.icon}></SelfknoledgeIcon>
                <h5 className={styles.service__name}>Autoconhecimento</h5>
                <Link href="/services#selfknowledge"><div className={styles.more}> Veja Mais </div></Link>
            </article>
        </div>
    </div>
);

export default Services;


