import React, { useState } from "react";
import { useRouter } from 'next/router'
import styles from "../../styles/Navbar.module.scss";
import Menu from "./MenuOverlay";
import Link from "next/link";
import Logo from "../../public/svg/Logo.svg";
import LanguageSelector from './LanguageSelector'

function Navbar() {
  const [menu, setToggle] = useState(false);
  const toggleMenu = () => setToggle(!menu);
  const router = useRouter()

  const keyDownHandler = (e) => {
    if(e.code === 'Enter') {
      if(e.target.dataset?.id === 'logo') {
        router.push('/')
      }
      if(e.target.dataset?.id === 'hamburger') {
        toggleMenu()
      }
    }
  }

  return (
    <div className={styles.navbar}>
      <Logo
        tabIndex={0}
        onClick={() => router.push('/')}
        className={styles.logo}
        onKeyDown={keyDownHandler}
        data-id="logo"
      />
      <div className={styles.menu_actions_container}>
        <div
          className={`${styles.menu_btn} ${menu ? styles.open : ""}`}
          onClick={toggleMenu}
          onKeyDown={keyDownHandler}
          tabIndex={0}
          data-id="hamburger"
        >
          <div className={styles.menu_btn__burger}></div>
        </div>
        <LanguageSelector />
      </div>
      <Menu toggle={menu} toggleMenu={setToggle}></Menu>
    </div>
  );
}

export default Navbar;
