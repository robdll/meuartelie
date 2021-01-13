
import React from "react";
import NavMenuIcon from "../../public/svg/nav.svg";
import styles from '../../styles/Navbar.module.scss'

/** TODO  replace hamburger with https://www.youtube.com/watch?v=dIyVTjJAkLw&ab_channel=codeSTACKr */
/** Add navbar https://www.youtube.com/watch?v=F0uED-w9E48&ab_channel=w3newbie */



class Navbar extends React.Component {
  
  render() {
    let toggle = styles.closed;

    const Menu = _ => (
      <div className={styles.menu__container}>
        <div className={styles.menu__content}>
          <ul className={styles.menu__list}>
            <li className={styles.menu__item}>Home</li>
            <li className={styles.menu__item}>Services</li>
            <li className={styles.menu__item}>Contact</li>
          </ul>
        </div>
      </div>
    );

    const handleClick = () =>  {
      toggle = toggle == styles.open ? styles.closed : styles.open;
      console.log(toggle);
    }

    return <div className={styles.navbar}>
      <i>Meuartelie</i>
      <NavMenuIcon onClick={handleClick} />
      <Menu></Menu>
    </div>;
  }

}




export default Navbar;


