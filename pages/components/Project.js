import React from "react";
import styles from "../../styles/Project.module.scss";
import ReactPlayer from "react-player/lazy";

const Project = (_) => (
  <div id='project' className={`section ${styles.project}`}>
    <h2 className={`title ${styles.title}`}>Sobre o Projeto MeuArtelie</h2>
    <span className={`separator ${styles.separator}`}> </span>
    <ReactPlayer
      url='https://www.youtube.com/watch?v=lME8_9iRQPA'
      controls={true}
      width='100%'
      height='100%'
    />
  </div>
);

export default Project;
