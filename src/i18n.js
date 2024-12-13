import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(HttpApi) // 使用 HTTP 後端載入翻譯文件
  .use(LanguageDetector) // 自動檢測語言
  .use(initReactI18next) // 初始化 react-i18next
  .init({
    fallbackLng: 'en', // 預設語言
    lng: 'en', // 默認語言（可選）
    debug: true, // 開啟除錯模式
    interpolation: {
      escapeValue: false, // React 已自動防範 XSS
    },
    backend: {
      loadPath: '/locales/{{lng}}/translation.json', // 翻譯文件的路徑
    },
    detection: {
      order: ['localStorage', 'cookie', 'navigator', 'htmlTag'], // 檢測語言順序
      caches: ['localStorage'], // 使用 localStorage 保存用戶選擇
    },
  });

export default i18n;
