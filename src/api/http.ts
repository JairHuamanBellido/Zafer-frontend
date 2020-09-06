import axios from 'axios';

const httpInstance = axios.create({
  baseURL: 'https://zafergame-api.herokuapp.com/',
});

export default httpInstance;
