import axios from "axios";

export const getAlbumTracks = async albumId => {
  const { data } = await axios.get(
    `http://localhost:3000/api/albums/${albumId}/tracks`
  );
  return data;
};
