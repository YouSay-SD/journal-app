import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCcHHkoVteSHfuDw4y6cGDRXQtTgxsWd8E",
  authDomain: "react-app-26888.firebaseapp.com",
  databaseURL: "https://react-app-26888.firebaseio.com",
  projectId: "react-app-26888",
  storageBucket: "react-app-26888.appspot.com",
  messagingSenderId: "954899924422",
  appId: "1:954899924422:web:d0405c865bb30a1bc59ec7"
};

firebase.initializeApp(firebaseConfig);

// Data Base
const db = firebase.firestore();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
  db,
  googleAuthProvider,
  firebase
}