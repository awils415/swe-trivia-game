// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0Nqw6f45GCWXzGIWj1734qdoX7mHdaJE",
  authDomain: "trivia-test-237e9.firebaseapp.com",
  projectId: "trivia-test-237e9",
  storageBucket: "trivia-test-237e9.appspot.com",
  messagingSenderId: "502565717691",
  appId: "1:502565717691:web:7fd4d6ebf9e26810c2cb9e",
  measurementId: "G-CVR53SVY7M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const database = getFirestore(app);
export const auth = getAuth(app);