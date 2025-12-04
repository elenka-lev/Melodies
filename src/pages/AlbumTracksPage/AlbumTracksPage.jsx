import React from 'react'
import Banner from '../../components/Banner/Banner.jsx'
import s from './AlbumTracksPage.module.css'
import AlbumsTrackList from '../../components/AlbumsTrackList/AlbumsTrackList.jsx'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import Loading from '../../components/Loading/Loading.jsx'
import { useAlbumInfoQuery, useAlbumTracksQuery } from '../../hooks/useAlbumQuery.js'



const AlbumTracksPage = () => {
const { artistId, albumId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const { data: tracksResponse, tracksLoading } = useAlbumTracksQuery(albumId);
  const { data: albumInfo, isLoading: albumLoading } =
    useAlbumInfoQuery(albumId);
  
  const isLoading = tracksLoading || albumLoading;

  if (isLoading) return <Loading />;
  
  const tracks = tracksResponse?.data || [];
  const album = albumInfo || tracks[0]?.album || null;

  const handleBack = () => {
   
    if (location.state?.from === 'artist' && location.state.artistId) {
      navigate(`/artists/${location.state.artistId}`);
      return;
    }

    
    navigate(`/artists/${artistId}`);
  };

  return (
    <section className={s.albumTracksPage}>
      <button className={s.backBtn} onClick={handleBack}>
        <svg width={50} height={50} className={s.back}>
          <use href="/icons/back.svg" />
        </svg>
      </button>
      {album && (
        <Banner
          artists={[
            {
              id: album.id,
              name: album.title,
              picture_xl: album.cover_xl,
              picture_big: album.cover_big,
              picture_medium: album.cover_medium,
            },
          ]}
        />
      )}

      <AlbumsTrackList tracks={tracks} album={album} />
    </section>
  );
}

export default AlbumTracksPage;