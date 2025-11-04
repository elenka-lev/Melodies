import {  useState } from "react";
import CardMusic from "../CardMusic/CardMusic.jsx";
import s from './ChartsGallery.module.css'
import clsx from 'clsx';
import Modal from "../Modal/Modal.jsx";

const ChartsGallery = ({ tracks }) => {
  const [visibleCount, setVisibleCount] = useState(5);
   const [selectedTrack, setSelectedTrack] = useState(null);
  const buildLinkClass = ({ isVisible }) => {
    return clsx(s.cardItem, isVisible && s.visible);
  };

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 5);
  };

  const visibleTracks = tracks.slice(0, visibleCount);
  const hasMore = visibleCount < tracks.length;

  return (
    <section className={s.container}>
      <h2 className={s.title}>
        Weekly Top <span>Songs</span>
      </h2>
      <ul className={s.wrapper}>
        {visibleTracks.map(track => (
          <li
            key={track.id}
            className={buildLinkClass({ isVisible: true })}
            onClick={() => setSelectedTrack(track)}
          >
            <CardMusic item={track} />
          </li>
        ))}
        {hasMore && (
          <li>
            <button className={s.showMore} onClick={handleShowMore}>
              +
            </button>
          </li>
        )}
      </ul>
      <Modal isOpen={!!selectedTrack} onClose={() => setSelectedTrack(null)}>
        {selectedTrack && (
          <div>
            <img
              src={selectedTrack.album.cover_medium}
              alt={selectedTrack.title}
            />
            <h3>{selectedTrack.title_short}</h3>
            <p>{selectedTrack.artist.name}</p>
          </div>
        )}
      </Modal>
    </section>
  );
}

export default ChartsGallery