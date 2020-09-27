export const environment = {
  API_URL:
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3010'
      : 'https://zafergame-api.herokuapp.com',
};
