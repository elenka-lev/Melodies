import axios from 'axios';

export const searchDeezer = async (query, type = 'track') => {
  const { data } = await axios.get('http://localhost:3000/api/search', {
    params: { q: query, type },
  });
  return data;
};
