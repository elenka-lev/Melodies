import React, { useEffect, useState } from 'react'
import s from './FavoriteMusic.module.css'
import FavoriteList from '../../components/FavoriteList/FavoriteList.jsx';
import { useQuery } from '@tanstack/react-query';
import { getFavorites } from '../../api/authApi.js';
import { useAuth } from '../../context/AuthContext.jsx';
import { useNavigate } from 'react-router-dom';


const FavoriteMusic = () => {
  const [currentTrack, setCurrentTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
const { isLoggedIn, isLoadingAuth } = useAuth(); 
const navigate = useNavigate();
  const { data: favorites, isLoading } = useQuery({
    queryKey: ['favorites'],
    queryFn: getFavorites,
  });
useEffect(() => {
  
  if (!isLoadingAuth && !isLoggedIn) {
    navigate('/'); 
  }
}, [isLoggedIn, isLoadingAuth, navigate]);


if (isLoadingAuth) return <div className={s.loader}>Checking access...</div>;

if (!isLoggedIn) return null;
console.log('Данные из базы:', favorites);

  return (
    <section className={s.favorite}>
      <div className={s.headerWrap}>
        <img src="/images/circle-logo.png" alt="Logo" />

        <h2 className={s.title}>Heartbeat Tracks</h2>
      </div>
      {favorites?.length > 0 ? (
        <FavoriteList
          favorites={favorites}
          currentTrack={currentTrack}
          setCurrentTrack={setCurrentTrack}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
        />
      ) : (
        <p className={s.emptyMsg}>Your sanctuary is empty. Add some magic!</p>
      )}
    </section>
  );
}

export default FavoriteMusic