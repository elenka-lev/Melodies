import s from './ArtistCard.module.css'

const ArtistCard = ({ item }) => {
  const artistName = item.name;
  const cover = item.picture_medium || '../../../public/main-logo.svg';
  return (
    <div className={s.container}> 
      <img className={s.img} src={cover} alt={artistName} />
      <p className={s.descr}>{artistName }</p>
    </div>
  )
}

export default ArtistCard