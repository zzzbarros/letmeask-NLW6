import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyCeqA900SukCGQBKBilR8LFt4pNGN-e22A",
  authDomain: "nlw6-letmeask-4026e.firebaseapp.com",
  projectId: "nlw6-letmeask-4026e",
  storageBucket: "nlw6-letmeask-4026e.appspot.com",
  messagingSenderId: "150636635030",
  appId: "1:150636635030:web:ac34a903f09569821f73b7",
  measurementId: "G-9MKF9F2EEJ"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const database = firebase.database();

export { firebase, auth, database }