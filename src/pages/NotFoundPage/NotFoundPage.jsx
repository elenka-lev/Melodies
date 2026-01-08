import React from 'react'
import s from './NotFoundPage.module.css'
import { useNavigate } from 'react-router-dom'
import Button from '../../components/Button/Button.jsx';


const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <div className={s.wrapper}>
      <div className={s.container}></div>
      <Button
        className={s.btn}
        variant="sign"
        onClick={() => navigate('/', { replace: true })}
      >
        Go home
      </Button>
      
    </div>
  );
}

export default NotFoundPage;