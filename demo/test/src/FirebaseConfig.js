// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getDatabase} from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyDPstC7Egl73YFkCaHgJGO1MlEeU-GW7KY',
  authDomain: 'calories-app-8459a.firebaseapp.com',
  databaseURL: 'https://calories-app-8459a-default-rtdb.firebaseio.com',
  projectId: 'calories-app-8459a',
  storageBucket: 'calories-app-8459a.appspot.com',
  messagingSenderId: '844452387387',
  appId: '1:844452387387:web:9b4de5d1dd10e98fe2da1e',
  measurementId: 'G-VX47CBGXFS',

  //realtime
  databaseURL: 'https://calories-app-8459a-default-rtdb.firebaseio.com',
};

// Initialize Firebase
export const connect = initializeApp(firebaseConfig);
export const database = getDatabase(connect);
