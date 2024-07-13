// src/utils/avatarFetcher.js

const avatars = [
    'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg',
    'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg',
    'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
    'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
    'https://images.pexels.com/photos/3748221/pexels-photo-3748221.jpeg',
    // Add more avatar URLs as needed
  ];
  
  export const fetchAvatars = (count) => {
    // Simulate fetching avatars
    const shuffled = avatars.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };
  