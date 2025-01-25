import jwt from 'jsonwebtoken';

export const getToken = () => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('token');
  }
  return null;
};

export const getUserFromToken = () => {
  const token = getToken();
  if (!token) return null;

  try {
    return jwt.decode(token);
  } catch (error) {
    return null;
  }
};

export const isAuthenticated = () => !!getToken();
