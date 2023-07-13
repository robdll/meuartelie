

import React from "react";
import styles from '../../styles/Testimonial.module.scss'
import Image from 'next/image'
import Carousel from 'react-material-ui-carousel'
import { useTranslation } from "react-i18next";

const Testimonial = _ => {

  const items = [
    "/png/testimonial_tania.webp",
    "/png/testimonial_creuza.webp",
  ]

  return (
    <div id="customers" className={`section ${styles.testimonial}`}>
      <h2 className={`title ${styles.title}`}>Clientes Felizes</h2>
      <span className={"separator"}> </span>

      <Carousel
        className={styles.carousel}
        autoPlay={false}
        stopAutoPlayOnHover={true}
        animation={"slide"}
        swipe={true}
        navButtonsAlwaysVisible={false}
        navButtonsProps={{
          style: {
            backgroundColor: "#8f34eb",
            opacity: 0.4
          }
        }}
      >
        {
          items.map((item, i) => <Item key={i} url={item} idx={i + 1} />)
        }
      </Carousel>
    </div>
  )
}

function Item({ url, idx }) {
  const { t } = useTranslation();
  return (
    <article className={styles.testimonial__card}>
      <div className={styles.testimonial__photo_container}>
        <Image
          className={styles.testimonial__photo}
          src={url}
          alt="Testimonial"
          fill
        />
      </div>
      <p className={styles.testimonial__copy}>{t(`testimonial.card-${idx}-review`)}</p>
      <span className={styles.testimonial__name}>{t(`testimonial.card-${idx}-name`)}</span>
      <span className={styles.testimonial__city}>{t(`testimonial.card-${idx}-location`)}</span>
    </article>
  )
}

export default Testimonial;


