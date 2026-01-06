import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './MyPlaylist.module.css'
import clsx from 'clsx';


const MyPlaylist = () => {
  const buildLinkClass = ({ isActive }) => {
        return clsx(s.link, isActive && s.active);
      };
  return (
    <div className={s.container}>
      <h5 className={s.title}>Playlist and favorite</h5>
        <ul className={s.list}>
        <li className={s.item}><NavLink to='/favorite' className={buildLinkClass}>
          <svg widths={16} height={16} className={s.svg}>
            <use href="/public/icons/symbol-defs.svg#icon-favorite" />
          </svg>Your favorites
        </NavLink></li>
        <li className={s.item}>
          <NavLink className={buildLinkClass}>
            <svg widths={16} height={16} className={s.svg}>
              <use href="/public/icons/symbol-defs.svg#icon-playlist" />
            </svg>Your playlist
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink className={buildLinkClass}>
            <svg widths={16} height={16} className={s.svg}>
              <use href="/public/icons/symbol-defs.svg#icon-add-playlist" />
            </svg>Add playlist
          </NavLink>
        </li>
        </ul>
    </div>
  )
}

export default MyPlaylist