import React, { useEffect, useRef } from 'react'
import s from './AlbumTracksCard.module.css'

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
  const audioRef = useRef(null);
  const isCurrent = currentTrack?.id === track.id;
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
                isCurrent && isPlaying
                  ? '../../../public/icons/pause.svg'
                  : '../../../public/icons/play.svg'
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
        <button className={s.favor}>
          <svg width={30} height={30}>
            <use href="../../../public/icons/favorite.svg" />
          </svg>
        </button>
      </div>
      <audio ref={audioRef} src={track.preview} onEnded={handleEnded} />
    </div>
  );
};

export default AlbumTracksCard;