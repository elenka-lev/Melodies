import { Field, Form, Formik } from 'formik';
import React from 'react';
import s from './LoginForm.module.css';
const LoginForm = () => {
  const initialValues = {
    password: '',
    email: '',
  };
  return (
    <Formik initialValues={initialValues}>
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
        <button type="button" className={s.googleBtn}>
          <svg width={24} height={24}>
            <use href="../../../public/icons/devicon_google.svg" />
          </svg>
          Sign Up With Google
        </button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
