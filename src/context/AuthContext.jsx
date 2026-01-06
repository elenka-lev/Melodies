import React, { createContext, useState, useContext, useEffect } from 'react';
import Modal from '../components/Modal/Modal'; 
import RegisterForm from '../components/RegisterForm/RegisterForm';
import LoginForm from '../components/LoginForm/LoginForm';
import s from './AuthContext.module.css';
import { useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';


const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState('signup');
const queryClient = useQueryClient();
const navigate = useNavigate();
  const openModal = mode => {
    setAuthMode(mode);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
  // 1. Проверяем токен в URL (после Google)
  const params = new URLSearchParams(window.location.search);
  const tokenFromUrl = params.get('token');

  if (tokenFromUrl) {
    localStorage.setItem('token', tokenFromUrl);
    setIsLoggedIn(true);
    
    window.history.replaceState({}, document.title, "/");
  }

  
  const savedToken = localStorage.getItem('token');
  if (savedToken) {
    setIsLoggedIn(true);
  }
  }, []);
  
  const logout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    queryClient.clear(); 
    navigate('/'); 
  };
  
  return (
    <AuthContext.Provider
      value={{ isLoggedIn, setIsLoggedIn, openModal, closeModal, logout }}
    >
      {children}

      <Modal isOpen={isModalOpen} onClose={closeModal} variant="auth">
        <div>
          <div className={s.authTabs}>
            <button
              type="button"
              className={authMode === 'signup' ? s.activeTab : s.tab}
              onClick={() => setAuthMode('signup')}
            >
              Sign Up
            </button>
            <button
              type="button"
              className={authMode === 'login' ? s.activeTab : s.tab}
              onClick={() => setAuthMode('login')}
            >
              Login
            </button>
          </div>
          {authMode === 'signup' ? <RegisterForm /> : <LoginForm />}
        </div>
      </Modal>
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
