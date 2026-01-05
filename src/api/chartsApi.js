import axios from 'axios';
import { BASE_URL } from '../constants.js';

export const getTopCharts = async () => {
  const { data } = await axios.get(`${BASE_URL}/api/charts/tracks`);
  return data;
}

export const getTopAlbums = async () => {
  const { data } = await axios.get(`${BASE_URL}/api/charts/albums`);
  return data;
}