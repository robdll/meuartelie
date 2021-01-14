
import React, { useState } from "react";
import NavMenuIcon from "../../public/svg/nav.svg";
import styles from '../../styles/Navbar.module.scss'
import Link from 'next/link'

/** TODO  replace hamburger with https://www.youtube.com/watch?v=dIyVTjJAkLw&ab_channel=codeSTACKr */
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
        <NavMenuIcon className={styles.hamburger} onClick={toggleMenu} />
        <Menu toggle={menu}></Menu>
      </div>
    );
}

export default Navbar;


