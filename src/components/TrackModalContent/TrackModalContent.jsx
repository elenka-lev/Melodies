import s from './TrackModalContent.module.css';

const TrackModalContent = ({ track }) => {
  if (!track) return null;

  return (
    <div className={s.wrapper}>
      <h2 className={s.title}>{track.title_short}</h2>
      <p className={s.artist}>{track.artist.name}</p>

      {track.album?.cover_big && (
        <img
          src={track.album.cover_medium}
          alt={track.title}
          className={s.cover}
        />
      )}

      <audio controls src={track.preview} className={s.audio} />
    </div>
  );
};

export default TrackModalContent;
