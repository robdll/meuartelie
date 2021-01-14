

import React from "react";
import styles from '../../styles/Project.module.scss'
import Image from 'next/image'

const Project = _ => (
    <div id="project" className={`section ${styles.project}`}>
        <h2 className={`title ${styles.title}`}>Sobre o Projeto MeuArtelie</h2>
        <span className={`separator ${styles.marginbot}`}> </span>
        {/** TODO: use responsive layout */}
        <Image
            className="videoplaceholder"
            src="/png/videocover.png"
            alt="Video"
            width={312}
            height={300}
        />
    </div>
);

export default Project;


