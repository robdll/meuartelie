

import React from "react";
import styles from '../../styles/InstagramFeed.module.scss'
import Image from 'next/image'
import Link from 'next/link'

const InstagramFeed = props => {
    let posts = props.feed ? props.feed.data : [];
    posts = posts.filter((i,idx) => idx < 1 )
    posts = posts.map( (i,idx) => <div key={idx} className={styles.photo__card}>
        <Link href={i.permalink} passHref >
            <a>
            <Image
                className={styles.photo}
                src={`${i.media_type === 'VIDEO' ? i.thumbnail_url : i.media_url}`}
                alt={i.caption}
                width={250}
                height={250}
            />
            </a>
        </Link>
    </div>
    )
     return (
        <div id="instagram" className={`section ${styles.instagram}`}>
            <h2 className={`title`}>Instagram</h2>
            <span className={`separator ${styles.separator}`}> </span>
            <article className={styles.photo__container}>
                {posts }
            </article>
        </div>
    );
}

export default InstagramFeed;


export async function getServerSideProps() {
  const res = await fetch(`https://v1.nocodeapi.com/meuartelie/instagram/jXuHsEtPDAnjfZZp?limit=5`)
  const data = await res.json()
  return { props: {data} }
}