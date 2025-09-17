import React, { createContext, useState, useEffect, useContext } from 'react';
import api from '../services/api';


const AuthContext = createContext();


export const useAuth = () => {
  return useContext(AuthContext);
};


export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: true,
    user: null,
  });

 
  const loadUser = async () => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const res = await api.get('/auth');
        setAuthState({
          token: token,
          isAuthenticated: true,
          loading: false,
          user: res.data,
        });
      } catch (err) {
        
        logout();
      }
    } else {
      setAuthState({ token: null, isAuthenticated: false, loading: false, user: null });
    }
  };


  useEffect(() => {
    loadUser();
  }, []);


  
 const register = async (formData) => {
    try {
      const res = await api.post('/auth/register', formData);
      localStorage.setItem('token', res.data.token);
      await loadUser(); 
    } catch (err) {
      console.error(err.response.data);
    }
  };
  
  const login = async (formData) => {
    try {
      const res = await api.post('/auth/login', formData);
      localStorage.setItem('token', res.data.token);
      setAuthState({
        token: res.data.token,
        isAuthenticated: true,
        loading: false,
        user: res.data.user,
      });
    } catch (err) {
      console.error(err.response.data);
    }
  };

  
  const logout = () => {
    localStorage.removeItem('token');
    setAuthState({
      token: null,
      isAuthenticated: false,
      loading: false,
      user: null,
    });
  };

  const value = {
    ...authState,
    register,
    login,
    logout,
    loadUser 
  };

  return <AuthContext.Provider value={value}>{!authState.loading && children}</AuthContext.Provider>;
};