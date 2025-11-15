import s from './ArtistCard.module.css'

const ArtistCard = ({ item, type = 'artist' }) => {
  const name = type === 'artist' ? item.name : item.title;
  const cover =
    type === 'artist'
      ? item.picture_medium
      : item.cover_small || '../../../public/main-logo.svg';
  return (
    <div className={s.container}>
      <img className={s.img} src={cover} alt={name} />
      <p className={s.descr}>{name}</p>

      {type === 'album' && (
        
          <p className={s.release}>{item.release_date?.slice(0, 4)}</p>
        
      )}
    </div>
  );
};

export default ArtistCard