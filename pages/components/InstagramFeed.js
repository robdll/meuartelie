import React, { useState, useEffect } from "react";
import styles from "../../styles/InstagramFeed.module.scss";
import Image from "next/image";
import Link from "next/link";

const InstagramFeed = (props) => {
  const [size, setWidth] = React.useState(0);

  React.useEffect(() => {
    setWidth(window.innerWidth);
  });

  const updateSize = () => setWidth(window.innerWidth);

  useEffect(() => (window.onresize = updateSize), []);

  let posts = props.feed ? props.feed.data : [];
  console.log(props);
  const maxPost =
    size < 376 ? 0 : size < 450 ? 1 : size < 768 ? 2 : size < 1024 ? 3 : 4;
  if (Array.isArray(posts)) {
    posts = posts.filter((i, idx) => idx <= maxPost);
    posts = posts.map((i, idx) => (
      <div key={idx} className={styles.photo__card}>
        <Link href={i.permalink} passHref>
          <a>
            <Image
              className={styles.photo}
              src={`${
                i.media_type === "VIDEO" ? i.thumbnail_url : i.media_url
              }`}
              alt={i.caption}
              width={250}
              height={250}
            />
          </a>
        </Link>
      </div>
    ));
  }

  return (
    <div id='instagram' className={`section ${styles.instagram}`}>
      <h2 className={`title`}>Instagram</h2>
      <span className={`separator ${styles.separator}`}> </span>
      <article className={styles.photo__container}>{posts}</article>
    </div>
  );
};

export default InstagramFeed;
