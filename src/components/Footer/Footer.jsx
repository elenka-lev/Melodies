import React from 'react';
import s from './Footer.module.css';
import Logo from '../Logo/Logo.jsx';
import Github from 'lucide-react/dist/esm/icons/github';
import Linkedin from 'lucide-react/dist/esm/icons/linkedin';

const Footer = () => {
  return (
    <footer className={s.footer}>
      <ul className={s.footerWrap}>
        <li className={s.about}>
          <h3>About</h3>
          <p>
            <span>"Your World of Sound"</span> Discover millions of tracks,
            curated playlists, and new artists from around the world. Melodies
            is designed to bring the ultimate listening experience right to your
            ears. Explore genres, find your mood, and take your music everywhere
            you go.
          </p>
        </li>
        <li>
          <h3>Contact</h3>
          <ul>
            <li>
              <a
                href="tel:+380965091723"
                className={s.link}
                data-info="+38 (096) 509-17-23"
              >
                Call me
              </a>
            </li>
            <li>
              <a
                href="mailto:elenka.lev.12@gmail.com"
                className={s.link}
                data-info="elenka.lev.12@gmail.com"
              >
                Email
              </a>
            </li>
            <li>
              <a
                href="https://t.me/Elena_Sorokina_12"
                target="_blank"
                rel="noreferrer"
                className={s.link}
              >
                Telegram
              </a>
            </li>
          </ul>
        </li>
        <li>
          <Logo />
          <ul className={s.socialLink}>
            <li>
              <a
                href="https://github.com/yourlink"
                target="_blank"
                rel="noreferrer"
                className={s.socialLink}
              >
                <Github size={24} className={s.icon} />
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/in/yourlink"
                target="_blank"
                rel="noreferrer"
                className={s.socialLink}
              >
                <Linkedin size={24} className={s.icon} />
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
