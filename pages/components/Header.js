import React from "react";
import styles from "../../styles/Header.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const Header = (_) => {
  const { t } = useTranslation();
  return (
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
        <h1 className={styles.title}>{t("topHomeHeader1")}</h1>
        <h2 className={styles.subtitle}>{t("topHomeHeader2")}</h2>
        <Link href="#services">
          <div className={`btn ${styles.btn}`}>{t("topHomeHeader3")}</div>
        </Link>
      </div>
    </div>
  );
};
export default Header;
