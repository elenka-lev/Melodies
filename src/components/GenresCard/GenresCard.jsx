import React from 'react'
import s from './GenresCard.module.css'


const GenresCard = ({name, picture}) => {
  return (
    <div style={{
      backgroundImage: `url(${picture})`,
      
    }} className={s.genresCard}>
      <h3 className={s.title}>{name}</h3>
    </div>
  );
};

export default GenresCard