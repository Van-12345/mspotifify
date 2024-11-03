// App.js
import React, { useEffect, useState } from 'react';
import SpotifyLoginBtn from './components/SpotifyLoginBtn';
import PlaylistTracks from './components/PlaylistTracks';
import { getPlaylistTracks } from './actions/spotify';
import './App.css';

const App = () => {
  const [token, setToken] = useState(null);
  const [tracks, setTracks] = useState([]);
  const [currentAudio, setCurrentAudio] = useState(null); // Track the currently playing audio

  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem('token');

    if (!token && hash) {
      token = hash
        .substring(1)
        .split('&')
        .find((elem) => elem.startsWith('access_token'))
        .split('=')[1];

      window.location.hash = '';
      window.localStorage.setItem('token', token);
    }

    setToken(token);
  }, []);

  useEffect(() => {
    if (token) {
      getPlaylistTracks(token, '54ZA9LXFvvFujmOVWXpHga').then(setTracks);
    }
  }, [token]);

  // Function to handle play event, passed to each TrackItem
  const handlePlay = (audio) => {
    // Pause the currently playing audio if it's different from the new one
    if (currentAudio && currentAudio !== audio) {
      currentAudio.pause();
    }
    // Set the new audio element as the currently playing one
    setCurrentAudio(audio);
  };

  return (
    <div className="App">
      {!token ? (
        <SpotifyLoginBtn />
      ) : (
        <PlaylistTracks tracks={tracks} onPlay={handlePlay} />
      )}
    </div>
  );
};

export default App;
