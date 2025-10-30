import React from 'react';
import s from './Search.module.css';
const Search = () => {
  return (
    <form className={s.form}>
      <button type="submit" className={s.btn}>
        <svg width={25} height={25}>
          <use href="/public/icons/symbol-defs.svg#icon-search" />
        </svg>
      </button>
      <input
        type="text"
        placeholder="Search For Musics, Artists, ..."
        className={s.input}
      />
    </form>
  );
};

export default Search;
