
import React, { useState } from "react";
import styles from '../../styles/Navbar.module.scss'
import Link from 'next/link'

/** TODO fix navbar animation https://stackoverflow.com/questions/65718947/overlay-navbar-with-transition-in-react */

function Navbar() {
    const [menu, setToggle] = useState(false);
    const toggleMenu = () => setToggle(!menu);

    const Menu = props => (
        <div className={ props.toggle ? `${styles.menu__container} ${styles.toggle}` : `${styles.menu__container}` }>
          <div className={styles.menu__content}>
            <ul className={styles.menu__list}>
              <li className={styles.menu__item} onClick={toggleMenu}> <Link href="/"><span>Home</span></Link></li>
              <li className={styles.menu__item} onClick={toggleMenu}> <Link href="/services"><span>Services</span></Link></li>
              <li className={styles.menu__item} onClick={toggleMenu}> <Link href="/services#contact"><span>Contact</span></Link></li>
            </ul>
          </div>
        </div>
    );

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


