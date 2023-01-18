// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvHKmOXp04KSo-BuEn-f-450PTwfk2WG8",
  authDomain: "mycoffeeplace-55497.firebaseapp.com",
  projectId: "mycoffeeplace-55497",
  storageBucket: "mycoffeeplace-55497.appspot.com",
  messagingSenderId: "949427040343",
  appId: "1:949427040343:web:8827cca95147f23cbf7312"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
