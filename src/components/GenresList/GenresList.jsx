import clsx from 'clsx';
import GenresCard from '../GenresCard/GenresCard.jsx';
import s from './GenresList.module.css'
import { useState } from 'react';

export const GenresList = ({ genres, onGenreClick }) => {
  const [visibleCount, setVisibleCount] = useState(4);
  // const [selectedGenre, setSelectedGenre] = useState(null);
  const buildLinkClass = ({ isVisible }) => {
    return clsx(s.genresItem, isVisible && s.visible);
  };

  const handleShowMore = () => {
    setVisibleCount(prev => prev + 4);
  };

  const visibleGenres = genres?.slice(0, visibleCount) || [];
  const hasMore = genres ? visibleCount < genres.length : false;

  return (
    <ul className={s.genresList}>
      {visibleGenres.map(genre => (
        <li
          key={genre.id}
          className={buildLinkClass({ isVisible: true })}
          onClick={() => onGenreClick(genre.name)}
        >
          <GenresCard name={genre.name} picture={genre.picture_medium} />
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
  );
};
