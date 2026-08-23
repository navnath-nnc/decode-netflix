// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCAlFFsS_zL5LjmWuOIKu2tNVGgCm40gJ4",
  authDomain: "decode-netflix.firebaseapp.com",
  projectId: "decode-netflix",
  storageBucket: "decode-netflix.firebasestorage.app",
  messagingSenderId: "504526606130",
  appId: "1:504526606130:web:f75db6f9bc82272901912b",
  measurementId: "G-S7WG59D4KF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
