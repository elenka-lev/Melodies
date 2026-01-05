import s from './AlbumsGeneresCard.module.css'

const AlbumsGeneresCard = ({album}) => {
  return (
    <div className={s.cardWrap}>
      <img src={album.cover_medium} alt={album.title} className={s.img } />
      <p className={s.title}>{album.title}</p>
      <p className={s.artist}>{album.artist.name}</p>
    </div>
  );
}

export default AlbumsGeneresCard