import { Field, Form, Formik, useFormik } from 'formik'
import React, { useState } from 'react'
import s from './RegisterForm.module.css'


const RegisterForm = () => {

  const initialValues = {
      name: '',
      password: '', 
      email: '',
    }
  return (
    <Formik initialValues={initialValues}>
      <Form className={s.registerForm}>
        <div className={s.formGroup}>
          <div className={s.nameField}>
            <label htmlFor="name">Name</label>
            <Field name="name" type="text" placeholder="Enter Your Name" />
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
            <svg width={24} height={24} className={s.pswrdIcon}>
              <use href="../../../public/icons/key.svg" />
            </svg>
          </div>
        </div>
        <div className={s.emailField}>
          <label htmlFor="email">E-mail</label>
          <Field name="email" type="email" placeholder="Enter Your E-Mail" />
          <svg width={24} height={24} className={s.emailIcon}>
            <use href="../../../public/icons/email.svg" />
          </svg>
        </div>

        <button type="submit" className={s.btn}>
          Sign Up
        </button>
        <div className={s.divider}>
          <span className={s.line}></span>
          <span>Or</span>
          <span className={s.line}></span>
        </div>

        <button type="button" className={s.googleBtn}>
          <svg width={24} height={24}>
            <use href="../../../public/icons/devicon_google.svg" />
          </svg>
          Sign Up With Google
        </button>
      </Form>
    </Formik>
  );
}

export default RegisterForm