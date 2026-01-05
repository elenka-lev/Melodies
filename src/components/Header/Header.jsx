import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar.jsx'
import Logo from '../Logo/Logo.jsx'
import s from './Header.module.css'
import MyPlaylist from '../MyPlaylist/MyPlaylist.jsx'
import Button from '../Button/Button.jsx'

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    <div className={s.container}>
      <Logo />
      <Navbar />
      <MyPlaylist />
      {isLoggedIn && (
        <Button className={s.btn} variant="logout">
          <svg className={s.svg} width="16" height="17">
            <use href="/public/icons/symbol-defs.svg#icon-logout" />
          </svg>
          Logout
        </Button>
      )}
    </div>
  );
}

export default Header 