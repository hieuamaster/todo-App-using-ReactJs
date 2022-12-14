// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCifTvcoChnHLjVHHXa6dt6WNGxIm4qD4Y",
  authDomain: "todo-app-v1-db69e.firebaseapp.com",
  projectId: "todo-app-v1-db69e",
  storageBucket: "todo-app-v1-db69e.appspot.com",
  messagingSenderId: "754051517479",
  appId: "1:754051517479:web:e2809e6a61b20182591202"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);