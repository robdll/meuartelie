import React from "react";
import styles from "../../styles/Project.module.scss";
import ReactPlayer from "react-player/lazy";

const Project = (_) => (
  <div id='project' className={`section ${styles.project}`}>
    <h2 className={`title ${styles.title}`}>Projeto MeuArtelie</h2>
    <span className={`separator ${styles.separator}`}> </span>
    <ReactPlayer
      style={{
        maxWidth: "800px",
        margin: " 0 auto 0 auto",
        overflow: "hidden",
        borderRadius: "30px",
        minHeight: "275px",
      }}
      url='https://www.youtube.com/watch?v=lME8_9iRQPA'
      controls={true}
      width='100%'
      height='100%'
    />
  </div>
);

export default Project;
