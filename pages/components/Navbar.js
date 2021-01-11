
import React from "react";
import NavMenuIcon from "../../public/svg/nav.svg";
import styles from '../../styles/Navbar.module.scss'

const Navbar = _ => (
  <div className={styles.navbar}>
        <i>Meuartelie</i>
        <NavMenuIcon />
  </div>
);

export default Navbar;


