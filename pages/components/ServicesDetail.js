import React from "react";
import styles from "../../styles/ServicesDetail.module.scss";
import Image from "next/image";
import { useTranslation } from "react-i18next";
const ServicesDetail = (_) => {
  const { t } = useTranslation();
  return (
    <div>
      <section id="art" className={`section ${styles.details}`} id="art">
        <h3 className={`title ${styles.title}`}>{t("serviceTitle1")}</h3>
        <span className={`separator ${styles.separator}`}> </span>
        <div className={styles.image__container}>
          <Image
            className="videoplaceholder"
            src="/png/videocover.png"
            alt="Art Service image"
            width={312}
            height={300}
          />
        </div>
        <div className={styles.info__container}>
          <p className={`paragraph ${styles.paragraph} ${styles.spacer}`}>
            {t("serviceContent")}
          </p>
          <br />
          <p className={`paragraph ${styles.paragraph}`}>
            {t("serviceSubContent")}
          </p>
          <br />
          <p className={`paragraph ${styles.paragraph} ${styles.fstart}`}>
            {t("serviceChildContent")}
          </p>
        </div>
      </section>

      <section
        id="courses"
        className={`section ${styles.details} ${styles.mirror}`}
      >
        <h3 className={`title ${styles.title}`}>{t("serviceHeader2")}</h3>
        <span className={`separator ${styles.separator}`}> </span>
        <div className={styles.image__container}>
          <Image
            className="videoplaceholder"
            src="/png/videocover.png"
            alt="Art Service image"
            width={312}
            height={300}
          />
        </div>
        <div className={styles.info__container}>
          <p className={`paragraph ${styles.paragraph} ${styles.spacer}`}>
            {t("serviceVideoContent")}
          </p>
          <br />
          <p className={`paragraph ${styles.paragraph}`}>
            {t("serviceVideoSubContent")}
          </p>
        </div>
      </section>

      <section id="reading" className={`section ${styles.details}`}>
        <h3 className={`title ${styles.title}`}>{t("serviceTitle3")}</h3>
        <span className={`separator ${styles.separator}`}> </span>
        <div className={styles.image__container}>
          <Image
            className="videoplaceholder"
            src="/png/videocover.png"
            alt="Art Service image"
            width={312}
            height={300}
          />
        </div>
        <div className={styles.info__container}>
          <p className={`paragraph ${styles.paragraph} ${styles.spacer}`}>
            {t("serviceConsultContent")}
          </p>
          <br />
          <p className={`paragraph ${styles.paragraph}`}>
            {t("serviceConsultSubContent")}
          </p>
        </div>
      </section>

      <section
        id="workshop"
        className={`section ${styles.details} ${styles.mirror}`}
      >
        <h3 className={`title ${styles.title}`}>{t("serviceTitle4")}</h3>
        <span className={`separator ${styles.separator}`}> </span>
        <div className={styles.image__container}>
          <Image
            className="videoplaceholder"
            src="/png/videocover.png"
            alt="Art Service image"
            width={312}
            height={300}
          />
        </div>
        <div className={styles.info__container}>
          <p className={`paragraph ${styles.paragraph} ${styles.spacer}`}>
            {t("serviceWorkshopContent")}
          </p>
          <ul className={`paragraph ${styles.paragraph}`}>
            <li>{t("serviceWorkshopSubContent1")}</li>
            <li>{t("serviceWorkshopSubContent2")}</li>
            <li>{t("serviceWorkshopSubContent3")}</li>
            <span>{t("serviceWorkshopSubContent4")}</span> <br />
            <span> {t("serviceWorkshopSubContent5")}</span> <br />
            <span> {t("serviceWorkshopSubContent6")}</span> <br />
            <span> {t("serviceWorkshopSubContent7")}</span>
          </ul>
          <p className={`paragraph ${styles.paragraph}`}>
            {t("serviceWorkshopSubContent8")}
          </p>
        </div>
      </section>
    </div>
  );
};

export default ServicesDetail;
