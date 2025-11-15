import React from 'react'
import s from './ArtistAlbums.module.css'
import { li } from 'framer-motion/client';
import ArtistCard from '../ArtistCard/ArtistCard.jsx';


const ArtistAlbums = () => {
  return (
    <div>
      <h2 className={s.title}>
        Artist’s <span>Albums</span>
      </h2>
      <ul>
        {albums.map(album => (
          <li key={album.id}>
            <ArtistCard type={album} item={album} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ArtistAlbums