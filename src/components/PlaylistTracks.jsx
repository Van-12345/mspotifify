// components/PlaylistTracks.jsx
import React from 'react';
import TrackItem from './trackItem';
import styles from './PlaylistTracks.module.css';

const PlaylistTracks = ({ tracks, onPlay }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Your Playlist Tracks</h2>
      {tracks.map((track, index) => (
        <TrackItem key={index} track={track.track} onPlay={onPlay} />
      ))}
    </div>
  );
};

export default PlaylistTracks;
