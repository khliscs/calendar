// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBb03EWAoXbt33XldYmwu37U_Zr75dwD-w",
  authDomain: "calendar-73ca5.firebaseapp.com",
  projectId: "calendar-73ca5",
  storageBucket: "calendar-73ca5.appspot.com",
  messagingSenderId: "123442480589",
  appId: "1:123442480589:web:ae29b0b4167a3166f6f084",
  measurementId: "G-H2394PPHHH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default firebase.database();