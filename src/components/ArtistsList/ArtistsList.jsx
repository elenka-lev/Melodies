import React, { useState } from 'react';
import ArtistCard from '../ArtistCard/ArtistCard.jsx';
import s from './ArtistsList.module.css'
import { Link } from 'react-router-dom';
const ArtistsList = ({artists}) => {
  const [visibleCount, setVisibleCount] = useState(5);
  
  
  const handleShowMore = () => {
    setVisibleCount(prev => prev + 5);
  }

  const visibleArtists = artists.slice(0, visibleCount);
  const hasMore = visibleCount < artists.length;

  return (
    <section className={s.container}>
      <h2 className={s.title}>
        Popular <span>Artists</span>
      </h2>
      <ul className={s.wrapper}>
        {visibleArtists.map(artist => (
          <li key={artist.id} className={`${s.cardItem} ${s.cardItemVisible}`}>
            <Link to={`/artists/${artist.id}`} className={s.link}></Link>
            <ArtistCard item={artist} />
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
