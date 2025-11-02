import axios from 'axios';

export const getTopCharts = async () => {
  const { data } = await axios.get('http://localhost:3000/api/charts/tracks');
  return data;
}