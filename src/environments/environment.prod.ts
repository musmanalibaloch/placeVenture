const baseUrl = 'https://us-central1-place-venture.cloudfunctions.net/api/v1/';

export const environment = {
  production: true,
  createUsers:baseUrl+'signup',
  userLogin:baseUrl+'login',
  viewPosts:baseUrl+'',
  createPost:baseUrl+'createPost',
  firebase :{
    apiKey: "AIzaSyATptg9iK68V8Xbo72iB7aXKjsu1Z4TlLk",
    authDomain: "place-venture.firebaseapp.com",
    databaseURL: "https://place-venture.firebaseio.com",
    projectId: "place-venture",
    storageBucket: "place-venture.appspot.com",
    messagingSenderId: "953405741610"
  },
  
};
