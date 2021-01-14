

import React from "react";
import styles from '../../styles/Footer.module.scss'
import EmailIcon from "../../public/svg/email_icon.svg";
import PhoneIcon from "../../public/svg/phone_icon.svg";
import Link from 'next/link'

const Footer = _ => (
    <div className={`section ${styles.footer}`}>
        <span className={styles.footer__logo}>Meu Arteliê</span>
        <p className={styles.footer__copy}>Mandalas como símbolos sagrados, são portais de energia, um caminho de conexão entre você e seu Eu Superior!</p>
        <article className={styles.footer__socials_container}> 
            <Link href="https://www.instagram.com/meuartelie">
            <span className={styles.footer__icon}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12"><path d="M6,5.161A3.077,3.077,0,1,0,9.074,8.238,3.072,3.072,0,0,0,6,5.161Zm0,5.077a2,2,0,1,1,2-2A2,2,0,0,1,6,10.238Zm3.92-5.2A.718.718,0,1,1,9.2,4.318.716.716,0,0,1,9.918,5.035Zm2.038.728a3.551,3.551,0,0,0-.969-2.514A3.575,3.575,0,0,0,8.472,2.28c-.991-.056-3.96-.056-4.951,0a3.57,3.57,0,0,0-2.514.967A3.563,3.563,0,0,0,.037,5.761c-.056.991-.056,3.96,0,4.951a3.551,3.551,0,0,0,.969,2.514,3.579,3.579,0,0,0,2.514.969c.991.056,3.96.056,4.951,0a3.551,3.551,0,0,0,2.514-.969,3.575,3.575,0,0,0,.969-2.514c.056-.991.056-3.958,0-4.948Zm-1.28,6.011a2.025,2.025,0,0,1-1.141,1.141A13.225,13.225,0,0,1,6,13.157a13.328,13.328,0,0,1-3.537-.241A2.025,2.025,0,0,1,1.32,11.775a13.225,13.225,0,0,1-.241-3.537A13.328,13.328,0,0,1,1.32,4.7,2.025,2.025,0,0,1,2.46,3.56,13.225,13.225,0,0,1,6,3.319a13.328,13.328,0,0,1,3.537.241A2.025,2.025,0,0,1,10.675,4.7a13.225,13.225,0,0,1,.241,3.537A13.217,13.217,0,0,1,10.675,11.775Z" transform="translate(0.005 -2.237)"/></svg>
            </span>
            </Link>
            <Link href="https://www.facebook.com/meuartelie">
            <span className={styles.footer__icon}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6.445 12.033"><path d="M7.632,6.768l.334-2.178H5.876V3.178A1.089,1.089,0,0,1,7.1,2h.95V.147A11.584,11.584,0,0,0,6.368,0,2.659,2.659,0,0,0,3.522,2.931v1.66H1.609V6.768H3.522v5.264H5.876V6.768Z" transform="translate(-1.609)"/></svg>
            </span>
            </Link>
            <Link href="https://www.youtube.com/channel/UCa3vYFV35C0PwSDCLYgQUzQ">
                {/* TODO replace twitter icon with youtube icon */}
            <span className={styles.footer__icon}>
                <svg xmlns="http://www.w3.org/2000/svg" width="11.637" height="9.451" viewBox="0 0 11.637 9.451"><path d="M10.441,5.736c.007.1.007.207.007.31a6.739,6.739,0,0,1-6.786,6.786A6.74,6.74,0,0,1,0,11.761a4.934,4.934,0,0,0,.576.03,4.776,4.776,0,0,0,2.961-1.019,2.389,2.389,0,0,1-2.23-1.654,3.008,3.008,0,0,0,.45.037,2.522,2.522,0,0,0,.628-.081A2.385,2.385,0,0,1,.473,6.733V6.7a2.4,2.4,0,0,0,1.078.3,2.389,2.389,0,0,1-.738-3.19,6.779,6.779,0,0,0,4.918,2.5,2.692,2.692,0,0,1-.059-.546A2.387,2.387,0,0,1,9.8,4.134a4.7,4.7,0,0,0,1.514-.576,2.379,2.379,0,0,1-1.049,1.314A4.781,4.781,0,0,0,11.637,4.5a5.127,5.127,0,0,1-1.2,1.233Z" transform="translate(0 -3.381)"/></svg>
            </span>
            </Link>
        </article>
        <span className={styles.footer__list_title} >Mapa do site</span>
        <div className={styles.sitemap__container}>
            <ul className={styles.footer__list}>
                <li> <Link href="/"><span>Home</span></Link></li>
                <li> <Link href="/#about"><span>Sobre mim</span></Link></li>
                <li> <Link href="/#project"><span>Projeto</span></Link></li>
                <li> <Link href="/#services"><span>Serviços</span></Link></li>
                <li> <Link href="/#customers"><span>Clientes</span></Link></li>
                <li> <Link href="/#subscribe"><span>Inscreva-se</span></Link></li>
            </ul>
            <ul className={styles.footer__list}>
                <li> <Link href="/services"><span>Serviços</span></Link></li>
                <li> <Link href="/services#art"><span>Mandala Art</span></Link></li>
                <li> <Link href="/services#courses"><span>Video Aula</span></Link></li>
                <li> <Link href="/services#reading"><span>Leitura Mandala</span></Link></li>
                <li> <Link href="/services#selfknowledge"><span>Autoconhecimento</span></Link></li>
            </ul>
        </div>
        <span className={styles.footer__list_title} >Contactame</span>
        <ul className={styles.footer__list}>
            <li className={styles.flex}> 
            
                <EmailIcon></EmailIcon> <Link href="/services#contact"> cintya@meuartelie.com </Link>
            
            </li>
            <li className={styles.flex}> 
                <PhoneIcon></PhoneIcon> +351 910077277
             </li>
        </ul>
    </div>

);

export default Footer;


