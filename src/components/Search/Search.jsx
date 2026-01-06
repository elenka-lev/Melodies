import React, { useEffect, useState } from 'react';
import s from './Search.module.css';

const Search = ({ value, onSearch }) => {
  const [inputValue, setInputValue] = useState(value || '');

  

  const handleChange = e => {
    setInputValue(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!inputValue.trim()) return; 
    onSearch(inputValue.trim());
  };


  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <button type="submit" className={s.btn}>
        <svg width={25} height={25} className={s.svg}>
          <use href="../../../public/icons/symbol-defs.svg#icon-search" />
        </svg>
      </button>
      <input
        type="text"
        placeholder="Search For Musics, Artists, ..."
        className={s.input}
        value={inputValue}
        onChange={handleChange}
      />
    </form>
  );
};

export default Search;
