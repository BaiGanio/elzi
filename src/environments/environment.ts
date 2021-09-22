// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import { name, version } from '../../package.json';

export const environment = {
  production: false,
  name: name,
  version: version,
  firebaseConfig :{
    apiKey: "AIzaSyCSn8LPJsitpaxwtqLlBFkuo26b9k2gK0s",
    authDomain: "elzi-fb964.firebaseapp.com",
    projectId: "elzi-fb964",
    storageBucket: "elzi-fb964.appspot.com",
    messagingSenderId: "178849929820",
    appId: "1:178849929820:web:b136662530d24c5e61e499",
    measurementId: "G-ZLCDX0Y0V1"
  }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
