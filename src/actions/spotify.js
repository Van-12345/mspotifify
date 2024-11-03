// actions/spotify.js
import axios from 'axios';

const CLIENT_ID = '0fb5164f419f44559eb6347c2940579d';
const REDIRECT_URI ='http://localhost:3000/callback';
const SCOPES = 'playlist-read-private user-read-private';

export const getAuthUrl = () => {
  return `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&redirect_uri=${encodeURIComponent(
    REDIRECT_URI
  )}&scope=${encodeURIComponent(SCOPES)}&response_type=token&show_dialog=true`;
};

export const getPlaylistTracks = async (accessToken, playlistId) => {
  try {
    const response = await axios.get(
      `https://api.spotify.com/v1/playlists/${playlistId}/tracks`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return response.data.items;
  } catch (error) {
    console.error('Error fetching playlist tracks:', error);
    return [];
  }
};
