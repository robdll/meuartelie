

import React from "react";
import styles from '../../styles/Testimonial.module.scss'
import Image from 'next/image'
import Dots from "../../public/svg/3dots.svg";


/** TODO  apply transition https://codepen.io/murphyg/pen/qBWpLda */
const Testimonial = _ => (
    <div id="customers" className={`section ${styles.testimonial}`}>
        <h2 className={`title ${styles.title}`}>Clientes Felizes</h2>
        <span className={"separator"}> </span>
        <article className={styles.testimonial__card}>
            {/** TODO: use responsive layout */}
            <div className={styles.testimonial__photo_container}>
                <Image
                    className={styles.testimonial__photo}
                    src="/png/testimonial_tania.webp"
                    alt="Testimonial"
                    width={312}
                    height={300}
                />
            </div>
            <p className={styles.testimonial__copy}>O meu despertar da consciência foi um processo guiado pela Cintya Flores. Desenhar mandalas e compreender sua simbologia foi determinante neste processo</p>
            <span className={styles.testimonial__name}>Tânia Dantas</span>
            <span className={styles.testimonial__city}>Bahia, Brasil</span>
        </article>
        <Dots></Dots>

    </div>
);

export default Testimonial;


