// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBuUtan1vZ4AOj1Vp7ujAZCvMgmtaHB7wE",
  authDomain: "troski-33b2d.firebaseapp.com",
  projectId: "troski-33b2d",
  storageBucket: "troski-33b2d.appspot.com",
  messagingSenderId: "572794907710",
  appId: "1:572794907710:web:8edca63b76a27237adf56f",
  measurementId: "G-269LL1GLGY"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP)


