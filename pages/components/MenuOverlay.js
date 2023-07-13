
import styles from '../../styles/Navbar.module.scss'
import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next';

const Menu = (props) => {
  const router = useRouter();
  const { t } = useTranslation()

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
          <li className={`${styles.menu__item}`} onClick={ () => goTo('/')}><span>{t('navbar.menu.home')}</span></li>
          <li className={`${styles.menu__item}`} onClick={ () => goTo('/services')}><span>{t('navbar.menu.services')}</span></li>
          <li className={`${styles.menu__item}`} onClick={ () => goTo('/services#contact')}><span>{t('navbar.menu.contact')}</span></li>
        </ul>
      </div>
    </div>
  )
};

export default Menu;