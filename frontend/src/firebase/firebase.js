// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAScN2Q1kEPEuKlP6uVsPNwcd7CyKRFoHM",
  authDomain: "stagevote-38b29.firebaseapp.com",
  projectId: "stagevote-38b29",
  storageBucket: "stagevote-38b29.firebasestorage.app",
  messagingSenderId: "175920045941",
  appId: "1:175920045941:web:4d412cf4d6dffb9c8e3d3c",
  measurementId: "G-30MBLV16EN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);