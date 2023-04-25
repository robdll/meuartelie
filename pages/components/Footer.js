import React from "react";
import styles from '../../styles/Footer.module.scss'
import EmailIcon from "../../public/svg/email_icon.svg";
import PhoneIcon from "../../public/svg/phone_icon.svg";
import Link from 'next/link';

const Footer = _ => (
    <div className={`section ${styles.footer}`}>
        <span className={styles.footer__logo}>Meu Arteliê</span>
        <p className={styles.footer__copy}>Mandalas como símbolos sagrados, são portais de energia, um caminho de conexão entre você e seu Eu Superior!</p>
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
                <li> <Link href="/services#workshop"><span>Autoconhecimento</span></Link></li>
            </ul>
        </div>
        <span className={styles.footer__list_title} >Contactame</span>
        <article className={styles.footer__socials_container}> 
            <Link href="https://www.instagram.com/meuartelie">
            <span className={`${styles.instagram} ${styles.footer__icon}`}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12"><path d="M6,5.161A3.077,3.077,0,1,0,9.074,8.238,3.072,3.072,0,0,0,6,5.161Zm0,5.077a2,2,0,1,1,2-2A2,2,0,0,1,6,10.238Zm3.92-5.2A.718.718,0,1,1,9.2,4.318.716.716,0,0,1,9.918,5.035Zm2.038.728a3.551,3.551,0,0,0-.969-2.514A3.575,3.575,0,0,0,8.472,2.28c-.991-.056-3.96-.056-4.951,0a3.57,3.57,0,0,0-2.514.967A3.563,3.563,0,0,0,.037,5.761c-.056.991-.056,3.96,0,4.951a3.551,3.551,0,0,0,.969,2.514,3.579,3.579,0,0,0,2.514.969c.991.056,3.96.056,4.951,0a3.551,3.551,0,0,0,2.514-.969,3.575,3.575,0,0,0,.969-2.514c.056-.991.056-3.958,0-4.948Zm-1.28,6.011a2.025,2.025,0,0,1-1.141,1.141A13.225,13.225,0,0,1,6,13.157a13.328,13.328,0,0,1-3.537-.241A2.025,2.025,0,0,1,1.32,11.775a13.225,13.225,0,0,1-.241-3.537A13.328,13.328,0,0,1,1.32,4.7,2.025,2.025,0,0,1,2.46,3.56,13.225,13.225,0,0,1,6,3.319a13.328,13.328,0,0,1,3.537.241A2.025,2.025,0,0,1,10.675,4.7a13.225,13.225,0,0,1,.241,3.537A13.217,13.217,0,0,1,10.675,11.775Z" transform="translate(0.005 -2.237)"/></svg>
            </span>
            </Link>
            <Link href="https://www.facebook.com/meuartelie">
            <span className={`${styles.facebook} ${styles.footer__icon}`}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6.445 12.033"><path d="M7.632,6.768l.334-2.178H5.876V3.178A1.089,1.089,0,0,1,7.1,2h.95V.147A11.584,11.584,0,0,0,6.368,0,2.659,2.659,0,0,0,3.522,2.931v1.66H1.609V6.768H3.522v5.264H5.876V6.768Z" transform="translate(-1.609)"/></svg>
            </span>
            </Link>
            <Link href="https://www.youtube.com/channel/UCa3vYFV35C0PwSDCLYgQUzQ">
                <span className={`${styles.youtube} ${styles.footer__icon}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 310 310"> <path id="XMLID_823_" d="M297.917,64.645c-11.19-13.302-31.85-18.728-71.306-18.728H83.386c-40.359,0-61.369,5.776-72.517,19.938 C0,79.663,0,100.008,0,128.166v53.669c0,54.551,12.896,82.248,83.386,82.248h143.226c34.216,0,53.176-4.788,65.442-16.527 C304.633,235.518,310,215.863,310,181.835v-53.669C310,98.471,309.159,78.006,297.917,64.645z M199.021,162.41l-65.038,33.991 c-1.454,0.76-3.044,1.137-4.632,1.137c-1.798,0-3.592-0.484-5.181-1.446c-2.992-1.813-4.819-5.056-4.819-8.554v-67.764 c0-3.492,1.822-6.732,4.808-8.546c2.987-1.814,6.702-1.938,9.801-0.328l65.038,33.772c3.309,1.718,5.387,5.134,5.392,8.861 C204.394,157.263,202.325,160.684,199.021,162.41z"> </path> </svg>
                </span>
            </Link>
        </article>
        <ul className={`${styles.footer__list} ${styles.footer__contact}`}>
            <li className={`${styles.flex} ${styles.email}`}> 
                <EmailIcon></EmailIcon> <Link href="/services#contact"> cintya@meuartelie.com </Link>
            </li>
            <li className={`${styles.flex} ${styles.phone}`}> 
                <PhoneIcon></PhoneIcon> +339 3513800037
             </li>
        </ul>
    </div>

);

export default Footer;


