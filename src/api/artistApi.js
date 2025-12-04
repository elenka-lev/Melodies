import axios from "axios"
import { BASE_URL } from "../constants.js";


export const getTopArtists = async () => {
  const { data } = await axios.get(`${BASE_URL}/api/artists`);
  return data;
}

export const getArtistTopTracks = async (artistId) => {
  const { data } = await axios.get(`${BASE_URL}/api/artists/${artistId}/top`);
  return data;
}

export const getArtistAlbums = async (artistId) => {
  const { data } = await axios.get(
    `${BASE_URL}/api/artists/${artistId}/albums`
  );
  return data;
};

