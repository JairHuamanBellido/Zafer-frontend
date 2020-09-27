import axios, { AxiosRequestConfig } from 'axios';
import { environment } from '../environment/environment';

const httpInstance = axios.create({
  // baseURL: 'https://zafergame-api.herokuapp.com/',
  baseURL: `${environment.API_URL}/`,
});

httpInstance.interceptors.request.use((request: AxiosRequestConfig) => {
  request.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
  return request;
});
export default httpInstance;
