import React from 'react';
import styles from './Footer.module.css'; // 導入 CSS 模塊

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <h2>聯絡我們</h2>
        <p>地址：Oswin Ave, Doncaster DN4 0NY</p>
        <p>電話：+44 07798 677998</p>
        <p>Email: contact@church.com</p>
      </div>
    </footer>
  );
}
