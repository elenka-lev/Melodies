import { useQuery } from "@tanstack/react-query"
import { getArtistAlbums, getArtistTopTracks, getTopArtists } from "../api/artistApi.js";

export const useTopArtistsQuery = () => {
  return useQuery({
    queryKey: ['artists', 'top'],
    queryFn: getTopArtists,
  });
};

export const useArtistTopTracksQuery = artistId => {
  return useQuery({
    queryKey: ['artists', artistId, 'topTracks'],
    queryFn: () => getArtistTopTracks(artistId),
    enabled: !!artistId,
  });
};

export const useArtistAlbumsQuery = artistId => {
  return useQuery({
    queryKey: ['artists', artistId, 'albums'],
    queryFn: () => getArtistAlbums(artistId),
    enabled: !!artistId,
  });
};