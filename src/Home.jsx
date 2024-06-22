// src/Home.js
import React from "react";
import styles from './Home.module.css';

export default function Home() {
  // 假設崇拜時間是每週日的上午11點
  const getNextServiceDates = () => {
    const now = new Date();
    const nextSunday = new Date(now);
    nextSunday.setDate(now.getDate() + (7 - now.getDay()) % 7); // 找到下個星期日
    nextSunday.setHours(11, 0, 0, 0); // 設定時間為上午11點

    const sundayAfterNext = new Date(nextSunday);
    sundayAfterNext.setDate(nextSunday.getDate() + 7); // 再往後一個星期日

    return { nextSunday, sundayAfterNext };
  };

  const { nextSunday, sundayAfterNext } = getNextServiceDates();

  // 格式化日期
  const formatDate = (date) => {
    return date.toLocaleDateString('zh-TW', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <>
      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <div className={styles.cardTitle}>下次崇拜</div>
          <div className={styles.cardContent}>{formatDate(nextSunday)}</div>
          <div className={styles.cardSubtext}>下下次崇拜: {formatDate(sundayAfterNext)}</div>
        </div>
      </div>

      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <h1 className={styles.mainTitle}>教會行事曆</h1>
          <iframe
            src="https://calendar.google.com/calendar/embed?src=af9b94cfb2aec41cf9db7e015e29d95d970c8b154ed97454b7e4b320d79622fa%40group.calendar.google.com&ctz=Europe%2FLondon"
            className={styles.iframe}
            frameBorder="0"
            scrolling="no">
          </iframe>
        </div>
      </div>

      <div className={styles.cardContainer}>
      <div className={styles.card}>
        <h2 className={styles.mainTitle}>教會地址</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d483.9562034645867!2d-1.158906417564138!3d53.50643775249466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48790d2634a9c6ab%3A0x8270617b8ee1e2c6!2zRG9uY2FzdGVyIENoaW5lc2UgQ2hyaXN0aWFuIENodXJjaCDnlbbljaHlo6vpgZToj6_kurrln7rnnaPmlZnmnIM!5e0!3m2!1szh-TW!2suk"
          className={styles.iframe}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        </div>
      </div>
    </>
  );
}
