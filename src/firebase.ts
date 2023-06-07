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

// const firebaseConfig = {
//   apiKey: "AIzaSyD2zFC295MGE0ONvzRvI66CBy_CDBye3cY",
//   authDomain: "vjpchat-53073.firebaseapp.com",
//   projectId: "vjpchat-53073",
//   storageBucket: "vjpchat-53073.appspot.com",
//   messagingSenderId: "748502308888",
//   appId: "1:748502308888:web:5d66d268804dc0d003cb6d",
//   measurementId: "G-S9PQ9MZC90",
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
