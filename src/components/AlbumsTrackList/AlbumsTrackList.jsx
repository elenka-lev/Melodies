import React, { useEffect,  useState } from 'react';
import AlbumTracksCard from '../AlbumTracksCard/AlbumTracksCard.jsx';
import s from './AlbumsTrackList.module.css';

const AlbumsTrackList = ({ tracks, album }) => {
  if (!Array.isArray(tracks) || tracks.length === 0) {
    return <p className={s.empty}>No tracks found</p>;
  }

  const [currentTrack, setCurrentTrack] = useState(tracks[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  
  const handleNextTrack = () => {
    const currentIndex = tracks.findIndex(t => t.id === currentTrack.id);
    const nextIndex = (currentIndex + 1) % tracks.length;
    setCurrentTrack(tracks[nextIndex]);
    setIsPlaying(true);
  };

  return (
    
      <ol>
        {tracks.map(track => (
          <li key={track.id}>
            <AlbumTracksCard
              track={track}
              album={album}
              currentTrack={currentTrack}
              setCurrentTrack={setCurrentTrack}
              isPlaying={isPlaying}
              setIsPlaying={setIsPlaying}
              onTrackEnd={handleNextTrack}
            />
          </li>
        ))}
      </ol>
    
  );
};

export default AlbumsTrackList;
