import React, { useState } from 'react'
import s from './DiscoveryPage.module.css'
import Search from '../../components/Search/Search.jsx'
import Button from '../../components/Button/Button.jsx'
import { useQuery } from '@tanstack/react-query'
import { GenresList } from '../../components/GenresList/GenresList.jsx'
import { getGenres } from '../../api/genresApi.js'
import AlbumsGenresList from '../../components/AlbumsGenresList/AlbumsGenresList.jsx'
import Loading from '../../components/Loading/Loading.jsx'
import { getTopAlbums } from '../../api/chartsApi.js'
import { useAuth } from '../../context/AuthContext.jsx'
import { useSearchQuery } from '../../hooks/useSearchQuery.js'
import AlbumsTrackList from '../../components/AlbumsTrackList/AlbumsTrackList.jsx'

const DiscoveryPage = () => {
  const { openModal, isLoggedIn } = useAuth();
  const [selectedGenre, setSelectedGenre] = useState('');
  const {
    data: genres,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['genres'],
    queryFn: getGenres,
  });
  const { data: albums, isLoading: isAlbumsLoading } = useQuery({
    queryKey: ['albums'],
    queryFn: getTopAlbums,
  });
const { data: genreTracks, isLoading: isTracksLoading } = useSearchQuery(
  selectedGenre,
  'track'
  );
  if (isLoading || isAlbumsLoading ) return <Loading />;
  


  return (
    <section className={s.discovery}>
      <div className={s.headerWrap}>
        <Search />
        {!isLoggedIn && (
          <div className={s.btnWrap}>
            <Button
              className={s.btn}
              variant="login"
              onClick={() => openModal('login')}
            >
              Login
            </Button>
            <Button
              className={s.btn}
              variant="sign"
              onClick={() => openModal('signup')}
            >
              Sign Up
            </Button>
          </div>
        )}
      </div>
      <h2 className={s.title}>
        Music <span>Genres</span>
      </h2>
      <GenresList genres={genres} onGenreClick={setSelectedGenre} />
      {selectedGenre && (
        <div style={{ marginTop: '40px' }}>
          <h2 className={s.title}>
            Best in <span>{selectedGenre}</span>
          </h2>
          {isTracksLoading ? (
            <Loading />
          ) : (
            <AlbumsTrackList tracks={genreTracks?.data} />
          )}
        </div>
      )}
      <AlbumsGenresList albums={albums} />
    </section>
  );
}

export default DiscoveryPage