

import React from "react";
import { useRouter } from 'next/router'
import styles from '../../styles/Header.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { useTranslation } from 'react-i18next';

const Header = _ => {
	const { t } = useTranslation()
	const router = useRouter()
	
	const keyDownHandler = (e) => {
    if(e.code === 'Enter') {
      if(e.target.dataset?.id === 'cta') {
        router.push('/#services')
      }
    }
  }

	return (
		<div className={`section ${styles.header}`}>
			<div className={styles.image__container}>
				<Image
						src="/png/mandalabothlayer.webp"
						alt="Author's Mandala art"
						width={810}
						height={810}
						layout="responsive"
						priority="true"
				/>
			</div>
			<div className={styles.info__container}>
				<h1 className={styles.title}>{t('home.title')}</h1>
				<h2 className={styles.subtitle}>{t('home.subtitle')}</h2>
				<div
					className={`btn ${styles.btn}`}
					onClick={_ => router.push('/#services')}
					onKeyDown={keyDownHandler}
					tabIndex={0}
					data-id="cta"
				>
					{t('home.button')}
				</div>
			</div>
		</div>
	);
}

export default Header;


