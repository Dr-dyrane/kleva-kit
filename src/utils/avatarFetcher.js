// src/utils/avatarFetcher.js

import axios from 'axios';

const PEXELS_API_URL = 'https://api.pexels.com/v1/search';

export const fetchAvatars = async (count) => {
  try {
    const response = await axios.get(PEXELS_API_URL, {
      headers: {
        Authorization: import.meta.env.VITE_PEXELS_API_KEY,
      },
      params: {
        query: 'profile',
        per_page: count,
      },
    });

    const { photos } = response.data;
    const avatars = photos.map(photo => ({
      url: photo.src.medium,
      width: 100, // set width
      height: 100, // set height
    }));
    return avatars;
  } catch (error) {
    console.error('Error fetching avatars from Pexels:', error);
    return [];
  }
};
