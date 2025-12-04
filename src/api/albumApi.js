import axios from "axios";
import { BASE_URL } from "../constants.js";

export const getAlbumInfo = async albumId => {
  const { data } = await axios.get(
    `${BASE_URL}/api/albums/${albumId}`
  );
  return data;
};

export const getAlbumTracks = async albumId => {
  const { data } = await axios.get(`${BASE_URL}/api/albums/${albumId}/tracks`);
  return data;
};
