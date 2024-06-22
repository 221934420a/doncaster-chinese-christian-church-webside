import React, { useEffect, useState } from 'react';
import styles from './TopNav.module.css'; 

export default function TopNav() {
  const [isScrolled, setIsScrolled] = useState(false);

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
            <a href="/events" className={styles['navbar-link']}>活動</a>
          </li>
          <li className={styles['navbar-item']}>
            <a href="/about" className={styles['navbar-link']}>關於我們</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
