import React from "react";
import styles from '../../styles/Footer.module.scss'
import EmailIcon from "../../public/svg/email_icon.svg";
import PhoneIcon from "../../public/svg/phone_icon.svg";
import Link from 'next/link';
import { useTranslation } from 'react-i18next'

const Footer = _ => {
  const { t } = useTranslation('translations');
  return (
    <div className={`section ${styles.footer}`}>
      <span className={styles.footer__logo}>{t('footer.title')}</span>
      <p className={styles.footer__copy}>{t('footer.subtitle')}</p>
      <span className={styles.footer__list_title} >{t('footer.sitemap.title')}</span>
      <div className={styles.sitemap__container}>
        <ul className={styles.footer__list}>
          <li> <Link href="/"><span>{t('footer.sitemap.home')}</span></Link></li>
          <li> <Link href="/#about"><span>{t('footer.sitemap.about')}</span></Link></li>
          <li> <Link href="/#project"><span>{t('footer.sitemap.project')}</span></Link></li>
          <li> <Link href="/#services"><span>{t('footer.sitemap.services')}</span></Link></li>
          <li> <Link href="/#customers"><span>{t('footer.sitemap.testimonial')}</span></Link></li>
          <li> <Link href="/#subscribe"><span>{t('footer.sitemap.newsletter')}</span></Link></li>
        </ul>
        <ul className={styles.footer__list}>
          <li> <Link href="/services"><span>{t('footer.sitemap.services')}</span></Link></li>
          <li> <Link href="/services#art"><span>{t('footer.sitemap.art')}</span></Link></li>
          <li> <Link href="/services#courses"><span>{t('footer.sitemap.class')}</span></Link></li>
          <li> <Link href="/services#reading"><span>{t('footer.sitemap.reading')}</span></Link></li>
          <li> <Link href="/services#workshop"><span>{t('footer.sitemap.selfknowledge')}</span></Link></li>
        </ul>
      </div>
      <span className={styles.footer__list_title} >{t('footer.contacts.title')}</span>
      <article className={styles.footer__socials_container}>
        <Link href="https://www.instagram.com/meuartelie">
          <span className={`${styles.instagram} ${styles.footer__icon}`}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12"><path d="M6,5.161A3.077,3.077,0,1,0,9.074,8.238,3.072,3.072,0,0,0,6,5.161Zm0,5.077a2,2,0,1,1,2-2A2,2,0,0,1,6,10.238Zm3.92-5.2A.718.718,0,1,1,9.2,4.318.716.716,0,0,1,9.918,5.035Zm2.038.728a3.551,3.551,0,0,0-.969-2.514A3.575,3.575,0,0,0,8.472,2.28c-.991-.056-3.96-.056-4.951,0a3.57,3.57,0,0,0-2.514.967A3.563,3.563,0,0,0,.037,5.761c-.056.991-.056,3.96,0,4.951a3.551,3.551,0,0,0,.969,2.514,3.579,3.579,0,0,0,2.514.969c.991.056,3.96.056,4.951,0a3.551,3.551,0,0,0,2.514-.969,3.575,3.575,0,0,0,.969-2.514c.056-.991.056-3.958,0-4.948Zm-1.28,6.011a2.025,2.025,0,0,1-1.141,1.141A13.225,13.225,0,0,1,6,13.157a13.328,13.328,0,0,1-3.537-.241A2.025,2.025,0,0,1,1.32,11.775a13.225,13.225,0,0,1-.241-3.537A13.328,13.328,0,0,1,1.32,4.7,2.025,2.025,0,0,1,2.46,3.56,13.225,13.225,0,0,1,6,3.319a13.328,13.328,0,0,1,3.537.241A2.025,2.025,0,0,1,10.675,4.7a13.225,13.225,0,0,1,.241,3.537A13.217,13.217,0,0,1,10.675,11.775Z" transform="translate(0.005 -2.237)" /></svg>
          </span>
        </Link>
        <Link href="https://www.facebook.com/meuartelie">
          <span className={`${styles.facebook} ${styles.footer__icon}`}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6.445 12.033"><path d="M7.632,6.768l.334-2.178H5.876V3.178A1.089,1.089,0,0,1,7.1,2h.95V.147A11.584,11.584,0,0,0,6.368,0,2.659,2.659,0,0,0,3.522,2.931v1.66H1.609V6.768H3.522v5.264H5.876V6.768Z" transform="translate(-1.609)" /></svg>
          </span>
        </Link>
        <Link href="https://www.youtube.com/channel/UCa3vYFV35C0PwSDCLYgQUzQ">
          <span className={`${styles.youtube} ${styles.footer__icon}`}>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 310 310"> <path id="XMLID_823_" d="M297.917,64.645c-11.19-13.302-31.85-18.728-71.306-18.728H83.386c-40.359,0-61.369,5.776-72.517,19.938 C0,79.663,0,100.008,0,128.166v53.669c0,54.551,12.896,82.248,83.386,82.248h143.226c34.216,0,53.176-4.788,65.442-16.527 C304.633,235.518,310,215.863,310,181.835v-53.669C310,98.471,309.159,78.006,297.917,64.645z M199.021,162.41l-65.038,33.991 c-1.454,0.76-3.044,1.137-4.632,1.137c-1.798,0-3.592-0.484-5.181-1.446c-2.992-1.813-4.819-5.056-4.819-8.554v-67.764 c0-3.492,1.822-6.732,4.808-8.546c2.987-1.814,6.702-1.938,9.801-0.328l65.038,33.772c3.309,1.718,5.387,5.134,5.392,8.861 C204.394,157.263,202.325,160.684,199.021,162.41z"> </path> </svg>
          </span>
        </Link>
        <Link href="https://www.tiktok.com/@meuartelies2">
          <span className={`${styles.tiktok} ${styles.footer__icon}`}>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" fill="#000000" viewBox="0 0 512 512">
              <path d="M412.19,118.66a109.27,109.27,0,0,1-9.45-5.5,132.87,132.87,0,0,1-24.27-20.62c-18.1-20.71-24.86-41.72-27.35-56.43h.1C349.14,23.9,350,16,350.13,16H267.69V334.78c0,4.28,0,8.51-.18,12.69,0,.52-.05,1-.08,1.56,0,.23,0,.47-.05.71,0,.06,0,.12,0,.18a70,70,0,0,1-35.22,55.56,68.8,68.8,0,0,1-34.11,9c-38.41,0-69.54-31.32-69.54-70s31.13-70,69.54-70a68.9,68.9,0,0,1,21.41,3.39l.1-83.94a153.14,153.14,0,0,0-118,34.52,161.79,161.79,0,0,0-35.3,43.53c-3.48,6-16.61,30.11-18.2,69.24-1,22.21,5.67,45.22,8.85,54.73v.2c2,5.6,9.75,24.71,22.38,40.82A167.53,167.53,0,0,0,115,470.66v-.2l.2.2C155.11,497.78,199.36,496,199.36,496c7.66-.31,33.32,0,62.46-13.81,32.32-15.31,50.72-38.12,50.72-38.12a158.46,158.46,0,0,0,27.64-45.93c7.46-19.61,9.95-43.13,9.95-52.53V176.49c1,.6,14.32,9.41,14.32,9.41s19.19,12.3,49.13,20.31c21.48,5.7,50.42,6.9,50.42,6.9V131.27C453.86,132.37,433.27,129.17,412.19,118.66Z" /></svg>
          </span>
        </Link>
      </article>
      <ul className={`${styles.footer__list} ${styles.footer__contact}`}>
        <li className={`${styles.flex} ${styles.email}`}>
          <EmailIcon></EmailIcon> <Link href="/services#contact"> cintya@meuartelie.com </Link>
        </li>
        <li className={`${styles.flex} ${styles.phone}`}>
          <PhoneIcon></PhoneIcon> +39 3513800037
        </li>
      </ul>
    </div>

  );
}
export default Footer;


