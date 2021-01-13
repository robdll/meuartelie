
import React from "react";
import NavMenuIcon from "../../public/svg/nav.svg";
import styles from '../../styles/Navbar.module.scss'

/** TODO  replace hamburger with https://www.youtube.com/watch?v=dIyVTjJAkLw&ab_channel=codeSTACKr */
/** Add navbar https://www.youtube.com/watch?v=F0uED-w9E48&ab_channel=w3newbie */

const Navbar = _ => (
  <div className={styles.navbar}>
        <i>Meuartelie</i>
        <NavMenuIcon />
  </div>
);

export default Navbar;


