import  {  useState } from 'react'
import s from './AlbumsGenresList.module.css'
import AlbumsGeneresCard from '../AlbumsGeneresCard/AlbumsGeneresCard.jsx';

const AlbumsGenresList = ({albums = []}) => {
  const [visibleCount, setVisibleCount] = useState(5);

  const handleShowMore = () => {
    setVisibleCount(prev => prev + 4);
  };

  const visibleAlbums = albums.slice(0, visibleCount);
  const hasMore = visibleCount < albums.length;

  return (
    <div className={s.conteiner}>
      <h2 className={s.title}>
        Top <span>Albums</span>
      </h2>
      <ul className={s.list}>
        {visibleAlbums.map(album => (
          <li key={album.id} className={s.item}>
            <AlbumsGeneresCard album={album} />
          </li>
        ))}

        {hasMore && (
          <li className={s.itemBtn}>
            <button className={s.showMore} onClick={handleShowMore}>
              +
            </button>
          </li>
        )}
      </ul>
    </div>
  );
}

export default AlbumsGenresList