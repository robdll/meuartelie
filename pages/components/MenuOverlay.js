
import styles from '../../styles/Navbar.module.scss'
import Link from 'next/link'

const Menu = (props) => (
  <div key='1' className={ props.toggle ? `${styles.menu__container} ${styles.toggle}` : `${styles.menu__container}` }>
    <div className={`${styles.menu__content}`}>
      <ul className={`${styles.menu__list}`}>
        <li className={`${styles.menu__item}`} onClick={props.toggleMenu}> <Link href="/"><span>Home</span></Link></li>
        <li className={`${styles.menu__item}`} onClick={props.toggleMenu}> <Link href="/services"><span>Services</span></Link></li>
        <li className={`${styles.menu__item}`} onClick={props.toggleMenu}> <Link href="/services#contact"><span>Contact</span></Link></li>
      </ul>
    </div>
  </div>
);

export default Menu;


