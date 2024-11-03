// components/SpotifyLoginBtn.jsx
import React from 'react';
import { getAuthUrl } from '../actions/spotify'; // Make sure this path is correct
import styles from './SpotifyLoginBtn.module.css';

const SpotifyLoginBtn = () => {
  const handleLogin = () => {
    window.location.href = getAuthUrl();
  };

  return <button className={styles.button} onClick={handleLogin}>Login with Spotify</button>;
};

export default SpotifyLoginBtn;
