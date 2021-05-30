import React, { useState } from "react";
import styles from "../../styles/Navbar.module.scss";
import Menu from "./MenuOverlay";
import Link from "next/link";
import Logo from "../../public/svg/Logo.svg";

function Navbar() {
  const [menu, setToggle] = useState(false);
  const toggleMenu = () => setToggle(!menu);

  return (
    <div className={styles.navbar}>
      <Link href='/'>
        <span className={styles.logo}>
          <Logo />
        </span>
      </Link>
      <div
        className={`${styles.menu_btn} ${menu ? styles.open : ""}`}
        onClick={toggleMenu}
      >
        <div className={styles.menu_btn__burger}></div>
      </div>
      <Menu toggle={menu} toggleMenu={setToggle}></Menu>
    </div>
  );
}

export default Navbar;
