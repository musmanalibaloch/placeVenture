// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const baseUrl = 'https://us-central1-place-venture.cloudfunctions.net/api/v1/';
export const environment = {
  production: false,
  createUsers:baseUrl+'signup',
  userLogin:baseUrl+'login',
  viewPosts:baseUrl+'',
  createPost:baseUrl+'createpost',
  firebase :{
    apiKey: "AIzaSyATptg9iK68V8Xbo72iB7aXKjsu1Z4TlLk",
    authDomain: "place-venture.firebaseapp.com",
    databaseURL: "https://place-venture.firebaseio.com",
    projectId: "place-venture",
    storageBucket: "place-venture.appspot.com",
    messagingSenderId: "953405741610"
  }
};

/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
