import s from './Hero.module.css';
import Button from '../Button/Button.jsx';
import { useAuth } from '../../context/AuthContext.jsx';
// import Search from '../Search/Search.jsx';

const Hero = () => {
  const { openModal } = useAuth();
  return (
    <section className={s.hero}>
      <div className={s.container}>
        <div className={s.searchWrap}>
          {/* <Search /> */}
          <div className={s.btnWrap}>
            <Button className={s.btn} variant="login">
              Login
            </Button>
            <Button
              className={s.btn}
              onClick={() => openModal('signup')}
              variant="sign"
            >
              Sign Up
            </Button>
          </div>
        </div>
        <div className={s.wrapper}>
          <h1 className={s.title}>
            All the <span>Best Songs</span> in One Place
          </h1>
          <p className={s.subtitle}>
            On our website, you can access an amazing collection of popular and
            new songs. Stream your favorite tracks in high quality and enjoy
            without interruptions. Whatever your taste in music, we have it all
            for you!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
