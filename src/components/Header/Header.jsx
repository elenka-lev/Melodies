import React from 'react'
import Navbar from '../Navbar/Navbar.jsx'
import Logo from '../Logo/Logo.jsx'
import s from './Header.module.css'
import MyPlaylist from '../MyPlaylist/MyPlaylist.jsx'

const Header = () => {
  return (
    <div className={s.container}>
      <Logo />
      <Navbar />
      <MyPlaylist />
    </div>
  )
}

export default Header 