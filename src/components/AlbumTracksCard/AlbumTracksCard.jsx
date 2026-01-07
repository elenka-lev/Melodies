import React, { useEffect, useRef } from 'react'
import s from './AlbumTracksCard.module.css'
import { useAuth } from '../../context/AuthContext.jsx';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getFavorites, toggleFavoriteApi } from '../../api/authApi.js';

const formatDuration = seconds => {
  if (!seconds && seconds !== 0) return '';
  const m = Math.floor(seconds / 60);
  const sPart = (seconds % 60).toString().padStart(2, '0');
  return `${m}:${sPart}`;
};

const AlbumTracksCard = ({
  track,
  album,
  currentTrack,
  setCurrentTrack,
  isPlaying,
  setIsPlaying,
  onTrackEnd,
}) => {

  const { isLoggedIn, openModal } = useAuth();
  const queryClient = useQueryClient();

  const { data: favoritesData } = useQuery({
    queryKey: ['favorites'],
    queryFn: getFavorites, 
    enabled: isLoggedIn, 
  });
  const favorites = Array.isArray(favoritesData) ? favoritesData : [];
  
  
  const isFavorite = favorites.some(
  fav => String(fav.trackId) === String(track.id)
  );

  const mutation = useMutation({
    mutationFn: trackData => toggleFavoriteApi(trackData),
    onSuccess: newFavorites => {
      queryClient.setQueryData(['favorites'], newFavorites);
    },
  });


  const handleFavoriteClick = (e) => {
    e.preventDefault();
    if (!isLoggedIn) {
      openModal('login');
      return;
    }
    mutation.mutate(track);
  };

  const audioRef = useRef(null);
  const isCurrent = String(currentTrack?.id) === String(track.id);
  
  useEffect(() => {
    if (audioRef.current) {
      if (isCurrent && isPlaying) {
        audioRef.current.play().catch(() => {});
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, isCurrent]);

  const handlePlayPause = () => {
    if (isCurrent) {
      setIsPlaying(!isPlaying);
    } else {
      setCurrentTrack(track);
      setIsPlaying(true);
    }
  };

  const handleEnded = () => {
    setIsPlaying(false);
    if (onTrackEnd) {
      onTrackEnd(); 
    }
  };

  return (
    <div className={s.cardWrapp}>
      <div className={s.playWrapp}>
        <button className={s.btn} onClick={handlePlayPause}>
          <svg
            width={30}
            height={30}
            className={`${s.play} ${isCurrent && isPlaying ? s.pause : ''}`}
          >
            <use
              href={
                isCurrent && isPlaying ? '/icons/pause.svg' : '/icons/play.svg'
              }
            />
          </svg>
        </button>
        <ul className={s.list}>
          <li className={s.item}>{track.title}</li>
          <li className={s.item}>{album?.title || track?.album?.title}</li>
        </ul>
      </div>
      <div className={s.descr}>
        <p className={s.release}>
          {(album?.release_date || track?.release_date || '').slice(0, 4)}
        </p>
        <p className={s.duration}>{formatDuration(track.duration)}</p>
        <button
          className={`${s.favor} ${isFavorite ? s.activeFavor : ''}`}
          onClick={handleFavoriteClick}
          disabled={mutation.isPending}
        >
          <svg width={30} height={30}>
            <use
              href={
                isFavorite ? '/icons/light-favor.svg' : '/icons/favorite.svg'
              }
            />
          </svg>
        </button>
      </div>
      <audio ref={audioRef} src={track.preview} onEnded={handleEnded} />
    </div>
  );
};

export default AlbumTracksCard;