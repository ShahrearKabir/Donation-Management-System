import AxiosInstance from '../utils/axiosInstance';

// import axios from "axios";

export const signup = async (data) => {
  const response = await AxiosInstance.post('/auth/signup', data);
  return response.data;
};

export const login = async (data) => {
  const response = await AxiosInstance.post('/auth/login', data);
  return response.data;
};

export const logout = () => {
  localStorage.removeItem('token');
  window.location.href = '/login';
};
