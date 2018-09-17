const baseUrl = 'https://us-central1-place-venture.cloudfunctions.net/api/v1/';
export const environment = {
  production: false,
  createUsers:baseUrl+'signup',
  userLogin:baseUrl+'login',
  viewPosts:baseUrl+'',
  createPost:baseUrl+'createpost',
};
