import axios from "axios"


export const getTopArtists = async () => {
  const { data } = await axios.get('http://localhost:3000/api/artists');
  return data;
}

export const getArtistTopTracks = async (artistId) => {
  const { data } = await axios.get(
    `http://localhost:3000/api/artists/${artistId}/top`
  );
  return data;
}

export const getArtistAlbums = async (artistId) => {
  const { data } = await axios.get(
    `http://localhost:3000/api/artists/${artistId}/albums`
  );
  return data;
};

