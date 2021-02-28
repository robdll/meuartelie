

import React from "react";
import styles from '../../styles/Testimonial.module.scss'
import Image from 'next/image'
import Carousel from 'react-material-ui-carousel'

const Testimonial = _ => {

    const items = [
        {
            imageUrl: "/png/testimonial_tania.webp",
            feedback: "O meu despertar da consciência foi um processo guiado pela Cintya Flores. Desenhar mandalas e compreender sua simbologia foi determinante neste processo",
            name: "Tânia Dantas",
            location: "Bahia, Brasil"
        },
        {
            imageUrl: "/png/testimonial_creuza.webp",
            feedback: "Descubra seus mistérios e melhores sentimentos dentro das mágicas mandalas. Elas me levavam a esta linda viagem!",
            name: "Creuza Conceição",
            location: "Bahia, Brasil"
        }
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
                    items.map( (item, i) => <Item key={i} item={item} /> )
                }
            </Carousel>
        </div>
    )
}

function Item(props)
{
    return (
        <article className={styles.testimonial__card}>
            <div className={styles.testimonial__photo_container}>
                <Image
                    className={styles.testimonial__photo}
                    src={props.item.imageUrl}
                    alt="Testimonial"
                    width={312}
                    height={300}
                />
            </div>
            <p className={styles.testimonial__copy}>{props.item.feedback}</p>
            <span className={styles.testimonial__name}>{props.item.name}</span>
            <span className={styles.testimonial__city}>{props.item.location}</span>
        </article>
    )
}

export default Testimonial;


