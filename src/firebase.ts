// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDYFbIYvEFuW3IeA2pZBtTly6sFSTVLRfg",
  authDomain: "react-tutorial-c569e.firebaseapp.com",
  projectId: "react-tutorial-c569e",
  storageBucket: "react-tutorial-c569e.appspot.com",
  messagingSenderId: "191975451781",
  appId: "1:191975451781:web:4305bf7b0f94da1c330dec",
  measurementId: "G-ET0BVW2B9L",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
