import { useQuery } from '@tanstack/react-query';
import { getAlbumInfo, getAlbumTracks } from '../api/albumApi.js';


export const useAlbumInfoQuery = albumId => {
  return useQuery({
    queryKey: ['album', albumId],
    queryFn: () => getAlbumInfo(albumId),
    enabled: !!albumId,
  });
};

export const useAlbumTracksQuery = albumId => {
  return useQuery({
    queryKey: ['album', albumId, 'tracks'],
    queryFn: () => getAlbumTracks(albumId),
    enabled: !!albumId,
  });
};
