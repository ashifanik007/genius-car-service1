// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFsqqVaxg2aZjqYhTAd9cXcMAL3PHTxwY",
  authDomain: "genius-car-service1.firebaseapp.com",
  projectId: "genius-car-service1",
  storageBucket: "genius-car-service1.appspot.com",
  messagingSenderId: "414727249318",
  appId: "1:414727249318:web:7fa1375a291181b4bc4367"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;