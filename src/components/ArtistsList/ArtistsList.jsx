import React, { useState } from 'react';
import ArtistCard from '../ArtistCard/ArtistCard.jsx';
import s from './ArtistsList.module.css'
import { Link } from 'react-router-dom';


const ArtistsList = ({
  artists = [],
  type = 'artist',
  onArtistClick,
  artistId,
}) => {
  const [visibleCount, setVisibleCount] = useState(5);

  const safeArtists = Array.isArray(artists)
    ? artists.filter(item => item && item.id)
    : [];
  const visibleItems = safeArtists.slice(0, visibleCount);
  const hasMore = visibleCount < safeArtists.length;

  const handleShowMore = () => setVisibleCount(prev => prev + 5);

  return (
    <section className={s.container}>
      <h2 className={s.title}>
        {type === 'album' ? 'Albums' : 'Popular Artists'}
      </h2>
      <ul className={s.wrapper}>
        {visibleItems.map(item => {
          const currentArtistId =
            type === 'album'
              ? artistId
              : item.artist?.id || item.artist_id || item.id || 'unknown';

          const albumId = item.id;

          return (
            <li key={albumId} className={`${s.cardItem} ${s.cardItemVisible}`}>
              {type === 'album' ? (
                <Link
                  to={`/artists/${currentArtistId}/albums/${albumId}`}
                  className={s.link}
                >
                  <ArtistCard item={item} type={type} />
                </Link>
              ) : (
                <ArtistCard
                  item={item}
                  type={type}
                  onClick={() => onArtistClick(item)}
                />
              )}
            </li>
          );
        })}
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
