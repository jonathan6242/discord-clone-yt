// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwbSCRGz9_fSpCXwUXLKQNTi09uK0XUpY",
  authDomain: "discord-clone-52c76.firebaseapp.com",
  projectId: "discord-clone-52c76",
  storageBucket: "discord-clone-52c76.appspot.com",
  messagingSenderId: "940465091867",
  appId: "1:940465091867:web:14563a2515e772411a4fbe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { db, auth, provider }