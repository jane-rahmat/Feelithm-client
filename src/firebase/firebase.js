// src/firebase/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA4TTK1ddi3z71B_nr2wwkRl6k9HeT-T8I",
  authDomain: "feelithm.firebaseapp.com",
  projectId: "feelithm",
  storageBucket: "feelithm.appspot.com",
  messagingSenderId: "1044116232357",
  appId: "1:1044116232357:web:ea96e1f3c50533038b554c"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
