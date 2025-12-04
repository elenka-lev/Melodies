import axios from 'axios';
import { BASE_URL } from '../constants.js';

export const searchDeezer = async (query, type = 'track') => {
  const { data } = await axios.get(`${BASE_URL}/api/search`, {
    params: { q: query, type },
  });
  return data;
};
