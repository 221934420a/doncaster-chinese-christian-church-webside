import React, { useEffect, useState } from 'react';
import { NextUIProvider } from '@nextui-org/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home/Home';
import TopNav from './TopNav/TopNav';
import Events from './Events/Events';
import Footer from './Footer/Footer';
import Album from './Album/Album.jsx';
import styles from './App.module.css'; // 導入 CSS 模塊


export default function App() {
  const [navHeight, setNavHeight] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const navElement = document.querySelector('nav');
      if (navElement) {
        setNavHeight(navElement.offsetHeight);
      }
    };

    handleResize(); // 初始化時獲取導航欄高度
    window.addEventListener('resize', handleResize); // 在窗口大小改變時重新計算高度

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <NextUIProvider>
      <TopNav />
      <div className={styles.background} style={{ paddingTop: `${navHeight}px` }}> {/* 根據 navHeight 設置填充 */}
      <div className={styles.content}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<div>About</div>} />
            <Route path="/events" element={<Events />} />
            <Route path="/album" element={<Album />} />
          </Routes>
        </Router>
        </div>
        <Footer className="fixed inset-x-0 bottom-0" />

      </div>
    </NextUIProvider>
  );
}
