import { Field, Form, Formik } from 'formik';
import React, { useEffect } from 'react';
import s from './LoginForm.module.css';
import * as Yup from 'yup';
import { useMutation } from '@tanstack/react-query';
import { googleAuth, loginUser } from '../../api/authApi.js';
import { useAuth } from '../../context/AuthContext.jsx';
import { BASE_URL } from '../../constants.js';


const loginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(8, 'Too short').required('Required'),
});

const LoginForm = () => {

  const { setIsLoggedIn, closeModal } = useAuth();

  const mutation = useMutation({
    mutationFn: loginUser,
    onSuccess: data => {
      if (data.token) {
        localStorage.setItem('token', data.token);
      }
      setIsLoggedIn(true);
      closeModal();
    },
    onError: error => {
      alert(error.response?.data?.message || 'Login failed');
    },
  });
  const handleSubmit = values => {
    mutation.mutate(values);
  };


  const handleGoogleResponse = async response => {
      try {
        const idToken = response.credential; 
  
        
        const data = await googleAuth(idToken);
  
        if (data.token) {
          localStorage.setItem('token', data.token);
          setIsLoggedIn(true);
          closeModal();
          
          alert(`Welcome, ${data.user.name}!`);
        }
      } catch (error) {
        
        alert(
          'Server error: ' + (error.response?.data?.message || error.message)
        );
      }
    };
  
    
    useEffect(() => {
      
      if (window.google) {
        google.accounts.id.initialize({
          client_id:
            '697861147220-12t49h5h52too9lkseau285laslnbdcn.apps.googleusercontent.com', 
          callback: handleGoogleResponse,
        });
  
        google.accounts.id.renderButton(document.getElementById('googleBtn'), {
          theme: 'outline',
          size: 'large',
          width: '400px',
          text: 'signup_with',
          shape: 'pill',
        });
      }
    }, []);
  
  
  const initialValues = {
    password: '',
    email: '',
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={loginSchema}
      onSubmit={handleSubmit}
    >
      <Form className={s.loginForm}>
        <div className={s.label}>
          <label htmlFor="email">E-mail</label>
          <Field name="email" type="email" placeholder="Enter Your E-Mail" />
        </div>
        <svg width={24} height={24} className={s.emailIcon}>
          <use href="../../../public/icons/email.svg" />
        </svg>
        <div className={s.label}>
          <label htmlFor="password">Password</label>
          <Field
            name="password"
            type="password"
            placeholder="Enter Your Password"
          />
        </div>
        <svg width={24} height={24} className={s.pswrdIcon}>
          <use href="../../../public/icons/key.svg" />
        </svg>
        <button type="submit" className={s.btn}>
          Login
        </button>
        <div  id="googleBtn">
          
        </div>
      </Form>
    </Formik>
  );
};

export default LoginForm;
