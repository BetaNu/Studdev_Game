// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqW3gsxuMqId8hCmxumYz54yXV2F5Y78o",
  authDomain: "studdev-cc6a8.firebaseapp.com",
  projectId: "studdev-cc6a8",
  storageBucket: "studdev-cc6a8.appspot.com",
  messagingSenderId: "789474363315",
  appId: "1:789474363315:web:81c227ed4e10d27a642dc6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;