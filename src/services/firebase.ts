// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCeqA900SukCGQBKBilR8LFt4pNGN-e22A",
  authDomain: "nlw6-letmeask-4026e.firebaseapp.com",
  projectId: "nlw6-letmeask-4026e",
  storageBucket: "nlw6-letmeask-4026e.appspot.com",
  messagingSenderId: "150636635030",
  appId: "1:150636635030:web:ac34a903f09569821f73b7",
  measurementId: "G-9MKF9F2EEJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);