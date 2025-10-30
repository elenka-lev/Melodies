import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Navbar.module.css'
import clsx from 'clsx';

const Navbar = () => {
const buildLinkClass = ({ isActive }) => {
      return clsx(s.link, isActive && s.active);
    };

  return (
    <div className={s.container}>
      <h5 className={s.title}>Menu</h5>
      <ul className={s.list}>
        <li className={s.item}>
          <NavLink to='/' className={buildLinkClass}>
            <svg className={s.svg} width="16" height="16">
              <use href="/public/icons/symbol-defs.svg#icon-home" />
            </svg>
            Home
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink to='/discover' className={buildLinkClass}>
            <svg className={s.svg} width="16" height="16">
              <use href="/public/icons/symbol-defs.svg#icon-discover" />
            </svg>
            Discover
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink to='/albums' className={buildLinkClass}>
            <svg className={s.svg} width="16" height="16">
              <use href="/public/icons/symbol-defs.svg#icon-album" />
            </svg>
            Albums
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink to='/artists' className={buildLinkClass}>
            <svg className={s.svg} width="16" height="16">
              <use href="/public/icons/symbol-defs.svg#icon-artists" />
            </svg>
            Artists
          </NavLink>
        </li>
      </ul>
      
    </div>
  )
}

export default Navbar