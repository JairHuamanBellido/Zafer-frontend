import axios from 'axios';

export const http = axios;
export const httpInstance = http.create({
  baseURL: 'http://localhost:3010/',
});
