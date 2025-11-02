import s from './CardMusic.module.css'

const CardMusic = ({ item }) => {
  const title = item.title_short || item.title || item.name;
  const artist = item.artist?.name || item.artistName || 'Unknown Artist';
  const cover =
  item.album?.cover_medium ||
  item.cover_medium ||
    item.picture_medium ||
  '../../../public/main-logo.svg'
  return (
    <div className={s.container}>
      <img className={s.img} src={cover} alt={title} />
      <h3 className={s.title}>{title}</h3>
      <p className={s.artist}>{artist}</p>
    </div>
  );
};

export default CardMusic