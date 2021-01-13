

import React from "react";
import styles from '../../styles/Header.module.scss'


/** TODO add follogin animation https://www.youtube.com/watch?v=KwoSm0E8MOE&ab_channel=CodingNepal */
const ServicesHeader = _ => (
    <div className={`section ${styles.service}`}>
        <h2 className="title">Meus Serviços</h2>
        <div className={styles.service_link}> 
            <a href="#art">Art</a>  
            <a href="#video">Video</a>  
            <a href="#class" >Leitura</a> 
            <a href="#selfknoledge">Aula</a>    
        </div>
    </div>

);

export default ServicesHeader;


