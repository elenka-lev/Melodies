import axios from 'axios';
import { BASE_URL } from '../constants.js';

export const registerUser = async (userData) => {
  const { data } = await axios.post(`${BASE_URL}/api/auth/register`, userData);
  return data;
}

export const loginUser = async userData => {
  const { data } = await axios.post(`${BASE_URL}/api/auth/login`, userData);
  return data;
};

export const fetchCurrentUser = async token => {
  const { data } = await axios.get(`${BASE_URL}/api/auth/me`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

export const logoutUser = async token => {
  const { data } = await axios.post(
    `${BASE_URL}/api/auth/logout`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return data;
};

export const refreshToken = async token => {
  const { data } = await axios.post(
    `${BASE_URL}/api/auth/refresh-token`,     
    {},
    {
      headers: {    
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return data;
};

export const googleAuth = async googleToken => {
  const { data } = await axios.post(
    `${BASE_URL}/api/auth/google`,
    { googleToken },
    {
      headers: {
        Authorization: `Bearer ${googleToken}`,
      },
    }
  );
  return data;
};

export const getFavorites = async () => {
  const token = localStorage.getItem('token');
  const { data } = await axios.get(`${BASE_URL}/api/favorites`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return data.favorites; 
};

export const toggleFavoriteApi = async track => {
  const token = localStorage.getItem('token');
  const { data } = await axios.post(
    `${BASE_URL}/api/favorites/toggle`,
    { trackData: track }, 
    { headers: { Authorization: `Bearer ${token}` } }
  );
  return data.favorites;
};