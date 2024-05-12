// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyCvHY7d9M2eIaopP9L3YKukxgwGFyYCunQ",
    authDomain: "uniapp-97fa0.firebaseapp.com",
    databaseURL: "https://uniapp-97fa0.firebaseio.com",
    projectId: "uniapp-97fa0",
    storageBucket: "uniapp-97fa0.appspot.com", //sul tutorial la stringa è vuota
    messagingSenderId: "473616851926",
    appId: "1:473616851926:web:8198c711354cf4e0"
  }
};

/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
