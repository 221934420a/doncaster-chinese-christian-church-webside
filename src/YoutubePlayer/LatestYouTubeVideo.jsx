import React, { useState, useEffect } from 'react';
import axios from 'axios';

const LatestYouTubeVideo = ({ channelId, apiKey }) => {
  const [videoId, setVideoId] = useState(null);

  useEffect(() => {
    const fetchLatestVideo = async () => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=1`
        );
        
        if (response.data.items.length > 0) {
          setVideoId(response.data.items[0].id.videoId);
        }
      } catch (error) {
        console.error('Error fetching latest video:', error);
      }
    };

    fetchLatestVideo();
  }, [channelId, apiKey]);

  if (!videoId) return <div>Loading...</div>;

  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${videoId}`}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        title="Latest YouTube Video"
      ></iframe>
    </div>
  );
};

export default LatestYouTubeVideo;