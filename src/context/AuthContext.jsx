import React, { createContext, useState, useContext } from 'react';
import Modal from '../components/Modal/Modal'; 
import RegisterForm from '../components/RegisterForm/RegisterForm';
import LoginForm from '../components/LoginForm/LoginForm';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState('signup');

  const openModal = mode => {
    setAuthMode(mode);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, openModal }}>
      {children}

      
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div>
          
          {authMode === 'signup' ? <RegisterForm /> : <LoginForm />}
        </div>
      </Modal>
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
