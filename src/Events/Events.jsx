import React from 'react';
import ActionAreaCard from './ActionAreaCard';
import styles from './Events.module.css'; // 創建並導入 CSS 模塊
 import logo from "./img/20240708_chi.jpg";

export default function Events() {
  const meetings = [
    {
      image: logo,
      title: '成為更強壯的天國門徒',
      description: '講員:西緬牧師(英語教導,粵語翻譯)',
    },
    // {
    //   image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEin3BzDCV6vXJ_FZEmbXJ1Ac-Ehv1NZYSRh324Wd2bkFlA6JHWTLJUSgK_e_yZ1OHluHAVK94MZ5IA7CM2qxR4UuSVQVAFwnA34Z5M_wfDOz0PkiuO9DlFYqxFRiQ7MMDQWK37wRWFHxZcY/s800/building_chapel.png',
    //   title: '一般聚會',
    //   description: '我們的定期聚會包括敬拜和教導，歡迎所有人參加。',
    // },
    {
      image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhO0krZ2m6xqZjmtmlrm5YvC0535a8prusr9qVsNhsJgzr4E2936CDy_pPUYqhYwy1MlWHX3FU_V3znSlEouvTBrFlkYfepgVRserlV-ewTPUrpQAIXcs3wUpFuW21t0OeUmTWiU_F66Rr5/s800/music_gassyou_kids_world.png',
      title: '兒童聚會',
      description: '特別為兒童設計的聚會，充滿有趣的活動和學習。',
    },
    {
      image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgOs_7UThcuy11QGnvM6vC4b1k9dUuob1zBRIBIuu45AHxR-95WEK9nhTYqKMaHFMkP9vHpUeeSQ_WvL1rX5idEr8NB8pV4s0a7qSlJwzZ2OH7iUen4G7nBVCaJXN6Z4Uw9CrCswRbWLe0/s800/group_young_people.png',
      title: '青少年聚會',
      description: '專為青少年舉辦的聚會，討論生活和信仰問題。',
    },
  ];

  return (
    <div className={styles.eventsContainer}>
      {meetings.map((meeting, index) => (
        <ActionAreaCard
          key={index}
          image={meeting.image}
          title={meeting.title}
          description={meeting.description}
        />
      ))}
    </div>
  );
}
