import React, { useState } from 'react';
import ArtistCard from '../ArtistCard/ArtistCard.jsx';
import s from './ArtistsList.module.css'
import { Link } from 'react-router-dom';


const ArtistsList = ({ artists = [], type = 'artist' }) => {
  const [visibleCount, setVisibleCount] = useState(5);

  const safeArtists = Array.isArray(artists) ? artists : [];
  const visibleItems = safeArtists.slice(0, visibleCount);
  const hasMore = visibleCount < safeArtists.length;

  const handleShowMore = () => setVisibleCount(prev => prev + 5);


  return (
    <section className={s.container}>
      <h2 className={s.title}>
        {type === 'album' ? 'Albums' : 'Popular Artists'}
      </h2>
      <ul className={s.wrapper}>
        {visibleItems.map(item => (
          <li key={item.id} className={`${s.cardItem} ${s.cardItemVisible}`}>
            <Link
              to={`/${type === 'album' ? 'albums' : 'artists'}/${item.id}`}
              className={s.link}
            ></Link>
            <ArtistCard item={item} type={type} />
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
};

export default ArtistsList;
