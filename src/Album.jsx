import React, { useState } from 'react';
import styles from './Album.module.css';

export default function Album() {
  const albumsData = [
    {
      id: 1,
      title: '假期照片',
      photos: [
        'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj0l1AIQbs7P8OOitY56-7d2Ezc6fE2_TICruZfK_iWOLbNJw1up_wpNzE8-0GBatGMEgDTmkCYruOqLkuOk3BII_ei1V6P5yLIhHAvQhVfIG4h1E_6_rfW2zPdeST7h9kcriIYhkYhyZBN/s783/sports_referee_var_check.png',
        './image/Logo.jpg',
        'https://source.unsplash.com/random/800x600?forest',
      ]
    },
    {
      id: 2,
      title: '家庭聚會',
      photos: [
        'https://source.unsplash.com/random/800x600?family',
        'https://source.unsplash.com/random/800x600?dinner',
        'https://source.unsplash.com/random/800x600?party',
      ]
    },

  ];

  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const AlbumPreview = ({ album, onSelect }) => (
    <div className={styles.albumCard} onClick={() => onSelect(album)}>
      <img src={album.photos[0]} alt={album.title} className={styles.albumCover} />
      <div className={styles.albumTitle}>{album.title}</div>
      <div className={styles.photoCount}>{album.photos.length} 張相片</div>
    </div>
  );

  const AlbumDetail = ({ album, onBack }) => (
    <div className={styles.container}>
      <div className={styles.detailCard}>
        <button onClick={onBack} className={styles.backButton}>← 返回</button>
        <h2 className={styles.title}>{album.title}</h2>
        <div className={styles.photoGrid}>
          {album.photos.map((photo, index) => (
            <img key={index} src={photo} alt={`Photo ${index + 1}`} className={styles.photoItem}
              onClick={() => setSelectedPhoto(photo)} />
          ))}
        </div>
      </div>
    </div>
  );

  const PhotoModal = ({ photo, onClose }) => (
    <div className={styles.overlay} onClick={onClose}>
      <img src={photo} alt="Enlarged Photo" className={styles.enlargedPhotoFullScreen} />
    </div>
  );
  

  if (selectedPhoto) {
    return <PhotoModal photo={selectedPhoto} onClose={() => setSelectedPhoto(null)} />;
  }

  if (selectedAlbum) {
    return <AlbumDetail album={selectedAlbum} onBack={() => setSelectedAlbum(null)} />;
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        {/* <h1 className={styles.title}>我的相簿</h1> */}
      </div>
      <div className={styles.albumGrid}>
        {albumsData.map(album => (
          <AlbumPreview key={album.id} album={album} onSelect={setSelectedAlbum} />
        ))}
      </div>
    </div>
  );
}