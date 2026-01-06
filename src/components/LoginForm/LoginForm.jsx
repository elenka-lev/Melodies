import { Field, Form, Formik } from 'formik';
import React from 'react';
import s from './LoginForm.module.css';
import * as Yup from 'yup';
import { useMutation } from '@tanstack/react-query';
import { loginUser } from '../../api/authApi.js';
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

  const initialValues = {
    password: '',
    email: '',
  };
  return (
    <Formik initialValues={initialValues} validationSchema={loginSchema} onSubmit={handleSubmit}>
      <Form className={s.loginForm}>
        <label htmlFor="email">E-mail</label>
        <Field name="email" type="email" placeholder="Enter Your E-Mail" />
        <svg width={24} height={24} className={s.emailIcon}>
          <use href="../../../public/icons/email.svg" />
        </svg>
        <label htmlFor="password">Password</label>
        <Field
          name="password"
          type="password"
          placeholder="Enter Your Password"
        />
        <svg width={24} height={24} className={s.pswrdIcon}>
          <use href="../../../public/icons/key.svg" />
        </svg>
        <button type="submit" className={s.btn}>
          Login
        </button>
        <a href={`${BASE_URL}/api/auth/google`} type="button" className={s.googleBtn}>
          <svg width={24} height={24}>
            <use href="../../../public/icons/devicon_google.svg" />
          </svg>
          Sign Up With Google
        </a>
      </Form>
    </Formik>
  );
};

export default LoginForm;
