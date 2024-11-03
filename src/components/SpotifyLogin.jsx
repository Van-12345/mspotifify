// src/components/SpotifyLogin.jsx
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { setAccessToken } from '../actions/spotify';

function SpotifyLogin() {
  const navigate = useNavigate();

  useEffect(() => {
    const hash = window.location.hash;
    const token = new URLSearchParams(hash.replace('#', '?')).get('access_token');
    if (token) {
      setAccessToken(token);
      navigate('/playlist');
    } else {
      navigate('/');
    }
  }, [navigate]);

  return null; // Empty component since it's just for redirect handling
}

export default SpotifyLogin;
