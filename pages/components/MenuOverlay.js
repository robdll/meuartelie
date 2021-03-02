
import styles from '../../styles/Navbar.module.scss'
import { useRouter } from 'next/router'

const Menu = (props) => {
  const router = useRouter();

  const goTo = (destination) => {
    let options = { 
      shallow: router.pathname.includes('contact')
    }
    router.push(destination, undefined, options).then(() => window.scrollTo(0, 0));
    props.toggleMenu(!props.toggle);
  }
  
  return (
    <div key='1' className={ props.toggle ? `${styles.menu__container} ${styles.toggle}` : `${styles.menu__container}` }>
      <div className={`${styles.menu__content}`}>
        <ul className={`${styles.menu__list}`}>
          <li className={`${styles.menu__item}`} onClick={ () => goTo('/')}><span>Home</span></li>
          <li className={`${styles.menu__item}`} onClick={ () => goTo('/services')}><span>Serviços</span></li>
          <li className={`${styles.menu__item}`} onClick={ () => goTo('/services#contact')}><span>Contatos</span></li>
        </ul>
      </div>
    </div>
  )
};

export default Menu;