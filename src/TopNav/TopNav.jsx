import React, { useEffect, useState } from 'react';
import styles from './TopNav.module.css';
import { useTranslation } from 'react-i18next'; 

export default function TopNav() {
  const [isScrolled, setIsScrolled] = useState(false);

  const { t, i18n } = useTranslation();

  // const changeLanguage = (language) => {
  //   i18n.changeLanguage(language);
  // };

  const toggleLanguage = () => {
    const newLanguage = i18n.language === 'en' ? 'zh_tc' : 'en';
    i18n.changeLanguage(newLanguage);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles['navbar-top']}>
        <div className={styles['navbar-logo']}>
          <p>當卡士達華人基督教會</p>
        </div>
      </div>
      <div className={styles['navbar-bottom']}>
        <ul className={styles['navbar-items']}>
          <li className={styles['navbar-item']}>
            <a href="/" className={styles['navbar-link']}>Home</a>
          </li>
          <li className={styles['navbar-item']}>
            <a href="/events" className={styles['navbar-link']}>{t('event')}</a>
          </li>
          <li className={styles['navbar-item']}>
            <a href="/about" className={styles['navbar-link']}>{t('about')}</a>
          </li>
          <li className={styles['navbar-item']}>
            <a href="/album" className={styles['navbar-link']}>{t('album')}</a>
          </li>
          <button onClick={toggleLanguage}>{i18n.language === 'en' ? '中文' : 'English'}</button>
        </ul>
      </div>
    </nav>
  );
}
