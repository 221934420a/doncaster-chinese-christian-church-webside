import React, { useState } from 'react';
import styles from './Album.module.css';

export default function Album() {
  const albumsData = [
    {
      id: 1,
      title: '假期照片',
      photos: [
        'https://lh3.googleusercontent.com/pw/AP1GczO7RNLW87jC2xH3XKvp0hvIVhxW1M8QnyIYqDeAhqZoJmngNlth6HYzoW2cBc7WybHGwtKr_UHw8ayXFParJp6Nk7e8qI-3S2J80k-E15TkKMqdW1TogaK73l9m2BuhRzyOJOs73co8gf2_glsUDgdwnw=w1216-h911-s-no-gm?authuser=0',
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