import React from 'react'
import Header from '../Header/Header.jsx'
import { Outlet } from 'react-router-dom'
import s from './Layout.module.css'
import Footer from '../Footer/Footer.jsx'

const Layout = () => {
  return (
    <>
      <div className={s.container}>
        <aside className={s.aside}>
          <Header />
        </aside>
        <main className={s.main}>
          <Outlet />
        </main>
        <div className={s.footerWrap}>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Layout