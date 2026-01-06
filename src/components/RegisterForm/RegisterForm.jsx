import { ErrorMessage, Field, Form, Formik, useFormik } from 'formik'
import React, { useState } from 'react'
import s from './RegisterForm.module.css'
import * as Yup from 'yup'
import { useAuth } from '../../context/AuthContext.jsx';
import { useMutation } from '@tanstack/react-query';
import { registerUser } from '../../api/authApi.js';
import { BASE_URL } from '../../constants.js';

const registerSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too short!')
    .required('Name is required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Email is required'),
  password: Yup.string()
    .min(8, 'Minimum 8 characters')
    .required('Password is required'),
});

const RegisterForm = () => {
  const { setIsLoggedIn, closeModal } = useAuth();
  
  const mutation = useMutation({
    mutationFn: registerUser,
    onSuccess: data => {
      
      if (data.token) {
        localStorage.setItem('token', data.token); 
      }
      setIsLoggedIn(true); 
      closeModal(); 
    },
    onError: error => {
      
      alert(error.response?.data?.message || 'Something went wrong');
    },
  });

  const handleSubmit = values => {
    mutation.mutate(values);
  };

  const initialValues = {
      name: '',
      password: '', 
      email: '',
    }
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={registerSchema}
      onSubmit={handleSubmit}
    >
      <Form className={s.registerForm}>
        <div className={s.formGroup}>
          <div className={s.nameField}>
            <label htmlFor="name">Name</label>
            <Field name="name" type="text" placeholder="Enter Your Name" />
            <ErrorMessage name="name" component="span" className={s.error} />
            <svg width={24} height={24} className={s.nameIcon}>
              <use href="../../../public/icons/mi_user.svg" />
            </svg>
          </div>
          <div className={s.passwordField}>
            <label htmlFor="password">Password</label>
            <Field
              name="password"
              type="password"
              placeholder="Enter Your Password"
            />
            <ErrorMessage
              name="password"
              component="span"
              className={s.error}
            />
            <svg width={24} height={24} className={s.pswrdIcon}>
              <use href="../../../public/icons/key.svg" />
            </svg>
          </div>
        </div>
        <div className={s.emailField}>
          <label htmlFor="email">E-mail</label>
          <Field name="email" type="email" placeholder="Enter Your E-Mail" />
          <ErrorMessage name="email" component="span" className={s.error} />
          <svg width={24} height={24} className={s.emailIcon}>
            <use href="../../../public/icons/email.svg" />
          </svg>
        </div>

        <button type="submit" className={s.btn} disabled={mutation.isPending}>
          {mutation.isPending ? 'Processing...' : 'Sign Up'}
        </button>
        <div className={s.divider}>
          <span className={s.line}></span>
          <span>Or</span>
          <span className={s.line}></span>
        </div>

        <a
          type="button"
          className={s.googleBtn}
          href={`${BASE_URL}/api/auth/google`}
        >
          <svg width={24} height={24}>
            <use href="../../../public/icons/devicon_google.svg" />
          </svg>
          Sign Up With Google
        </a>
      </Form>
    </Formik>
  );
}

export default RegisterForm