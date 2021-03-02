
import React, { useState } from "react";
import styles from '../../styles/Navbar.module.scss';
import Menu from './MenuOverlay';
import Link from 'next/link';

function Navbar() {
  const [menu, setToggle] = useState(false);
  const toggleMenu = () => setToggle(!menu);

  return (
    <div className={styles.navbar}>
        <span className={styles.logo}><Link href="/">Meu Arteliê</Link></span>
        <div className={`${styles.menu_btn} ${menu ? styles.open : ''}`} onClick={toggleMenu}>
          <div className={styles.menu_btn__burger}></div>
        </div>
        <Menu toggle={menu} toggleMenu={setToggle}></Menu>
      </div>
  );
}

export default Navbar;