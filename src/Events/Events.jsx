import React, { useState } from 'react';
import ActionAreaCard from './ActionAreaCard';
import styles from './Events.module.css';

export default function Events() {
  const [fullscreenImage, setFullscreenImage] = useState(null);

  const meetings = [
    {
      image: "./Event Photo/20240708_chi.jpg",
      title: '成為更強壯的天國門徒',
      description: '講員: 西緬牧師 (英語教導, 粵語翻譯)',
    },
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

  const openFullscreenImage = (image) => {
    setFullscreenImage(image);
  };

  const closeFullscreenImage = () => {
    setFullscreenImage(null);
  };

  return (
    <div className={styles.eventsContainer}>
      {meetings.map((meeting, index) => (
        <div key={index} onClick={() => openFullscreenImage(meeting.image)}>
          <ActionAreaCard
            image={meeting.image}
            title={meeting.title}
            description={meeting.description}
          />
        </div>
      ))}

      {fullscreenImage && (
        <div className={styles.overlay} onClick={closeFullscreenImage}>
          <img
            src={fullscreenImage}
            alt="Enlarged Photo"
            className={styles.enlargedPhotoFullScreen}
          />
        </div>
      )}
    </div>
  );
}
