// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdNGZQ3c75d3x5GhZBrgVNmeCi3MRZFsw",
  authDomain: "habit-tracker-59d38.firebaseapp.com",
  projectId: "habit-tracker-59d38",
  storageBucket: "habit-tracker-59d38.firebasestorage.app",
  messagingSenderId: "30283906237",
  appId: "1:30283906237:web:c3665863b1ddde7b578bd4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);