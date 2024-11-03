// components/TrackItem.jsx
import React, { useRef } from 'react';
import styles from './TrackItem.module.css';

const TrackItem = ({ track, onPlay }) => {
  const albumImage = track.album.images[0]?.url;
  const audioRef = useRef(null); // Reference to the audio element

  const handlePlay = () => {
    if (audioRef.current) {
      onPlay(audioRef.current); // Pass the audio element to onPlay
    }
  };

  return (
    <div className={styles.track}>
      {albumImage && (
        <img
          src={albumImage}
          alt={`${track.name} album cover`}
          className={styles.albumImage}
        />
      )}
      <div className={styles.trackInfo}>
        <div className={styles.trackName}>{track.name}</div>
        <div className={styles.trackArtist}>
          {track.artists.map((artist) => artist.name).join(', ')}
        </div>
      </div>
      {track.preview_url ? (
        <audio
          className={styles.trackAudio}
          controls
          src={track.preview_url}
          ref={audioRef}
          onPlay={handlePlay} // Trigger handlePlay on play event
        ></audio>
      ) : (
        <p>No preview available</p>
      )}
    </div>
  );
};

export default TrackItem;
