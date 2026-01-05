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


const DiscoveryPage = () => {
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

  if (isLoading) return <Loading />;
  if (isAlbumsLoading) return <Loading />;


  return (
    <section className={s.discovery}>
      <div className={s.headerWrap}>
        <Search />
        <div className={s.btnWrap}>
          <Button className={s.btn} variant="login">
            Login
          </Button>
          <Button className={s.btn} variant="sign">
            Sign Up
          </Button>
        </div>
      </div>
      <h2 className={s.title}>
        Music <span>Genres</span>
      </h2>
      <GenresList genres={genres} />
      <AlbumsGenresList albums={albums} />
    </section>
  );
}

export default DiscoveryPage