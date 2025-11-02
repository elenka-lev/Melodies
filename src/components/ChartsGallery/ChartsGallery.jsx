import {  useState } from "react";
import CardMusic from "../CardMusic/CardMusic.jsx";
import s from './ChartsGallery.module.css'
import clsx from 'clsx';

const ChartsGallery = ({ tracks }) => {
  const [visibleCount, setVisibleCount] = useState(4);
  
  const buildLinkClass = ({ isVisible }) => {
    return clsx(s.cardItem, isVisible && s.visible);
  };

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 4);
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
          <li key={track.id} className={buildLinkClass({ isVisible: true })}>
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
    </section>
  );
}

export default ChartsGallery