import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getMemberInfo } from '@/api/auth/index';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({});

  const fetchGetUserInfo = async () => {
    try {
      const response = await getMemberInfo();
      return response;
    } catch (error) {
      console.error('Failed to fetch user info:', error);
      return null;
    }
  };

  useEffect(() => {
    const getUserInfo = async () => {
      const token = localStorage.getItem('userInfo');
      if (token) {
        const storedUserInfo = await fetchGetUserInfo();
        if (storedUserInfo) {
          setUserInfo(storedUserInfo);
        }
      }
    };

    getUserInfo();
  }, []);

  return (
    <AuthContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};
