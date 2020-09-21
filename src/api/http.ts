import axios, { AxiosRequestConfig } from 'axios';

const httpInstance = axios.create({
  baseURL: 'https://zafergame-api.herokuapp.com/',
  // baseURL: 'http://localhost:3010/',
});

httpInstance.interceptors.request.use((request: AxiosRequestConfig) => {
  request.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
  return request;
});
export default httpInstance;
