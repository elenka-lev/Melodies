import React from 'react'
import s from './FavoriteList.module.css';
import AlbumTracksCard from '../AlbumTracksCard/AlbumTracksCard.jsx';

const FavoriteList = ({
  favorites,
  currentTrack,
  setCurrentTrack,
  isPlaying,
  setIsPlaying,
}) => {
  return (
    <ul className={s.favoriteList}>
      {favorites.map(fav => (
        <li key={fav.trackId} className={s.favoriteItem}>
          <AlbumTracksCard
            track={{
              id: fav.trackId,
              title: fav.title,
              preview: fav.preview,
              duration: fav.duration, 
              release_date: fav.releaseDate,
              artist: { name: fav.artist },
              album: {
                title: fav.albumTitle || 'Single',
                cover_medium: fav.cover,
              },
            }}
            currentTrack={currentTrack}
            setCurrentTrack={setCurrentTrack}
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
          />
        </li>
      ))}
    </ul>
  );
};

export default FavoriteList