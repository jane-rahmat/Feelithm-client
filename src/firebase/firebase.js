
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA4TTK1ddi3z71B_nr2wwkRl6k9HeT-T8I",
  authDomain: "feelithm.firebaseapp.com",
  projectId: "feelithm",
  storageBucket: "feelithm.appspot.com", // 👈 fix spelling if it's wrong
  messagingSenderId: "1044116232357",
  appId: "1:1044116232357:web:ea96e1f3c50533038b554c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
