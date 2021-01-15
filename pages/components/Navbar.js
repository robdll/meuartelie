
import React, { useState } from "react";
import styles from '../../styles/Navbar.module.scss'
import Menu from './MenuOverlay'

function Navbar() {
  const [menu, setToggle] = useState(false);
  const toggleMenu = () => setToggle(!menu);
 
  return (
    <div className={styles.navbar}>
        <i>Meuartelie</i>
        <div className={`${styles.menu_btn} ${menu ? styles.open : ''}`} onClick={toggleMenu}>
          <div className={styles.menu_btn__burger}></div>
        </div>
        <Menu toggle={menu}></Menu>
      </div>
  );
}

export default Navbar;


