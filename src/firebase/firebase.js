// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyChcnrc1PwCMJrsq0IDBu0KN31HunWuc0M",
  authDomain: "final-d2a9b.firebaseapp.com",
  projectId: "final-d2a9b",
  storageBucket: "final-d2a9b.appspot.com",
  messagingSenderId: "299553771278",
  appId: "1:299553771278:web:882e7ad9d6f59e4bbc515f",
  measurementId: "G-TYJ80XDHY0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const google = new GoogleAuthProvider();
const facebook = new FacebookAuthProvider();

export {app ,google, facebook }
