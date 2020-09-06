import axios from 'axios';

export const http = axios;
export const httpInstance = http.create({
  baseURL: 'https://zafergame-api.herokuapp.com/',
});
