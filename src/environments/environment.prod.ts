export const environment = {
  production: true,
  base_url: 'http://localhost:6500/',
  register: 'api/auth',
  login: 'api/auth/authenticate',
  dashboard: 'api/auth/:UserName',
  videosList: 'api/videos',
  //videoDetailsById: 'api/videos/3',
  videoDetailsById: 'api/videos/:videoId'
};
