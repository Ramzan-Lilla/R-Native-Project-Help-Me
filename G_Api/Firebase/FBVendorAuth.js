// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";


const vendAuth = {
  apiKey: "AIzaSyA1VUod9Sg1E3E3A5gFnwkUXDjAVQxRWq8",
  authDomain: "fyp-vend-auth.firebaseapp.com",
  projectId: "fyp-vend-auth",
  storageBucket: "fyp-vend-auth.appspot.com",
  messagingSenderId: "600157655598",
  appId: "1:600157655598:web:52e401ab9bdc2ab4fe45bf",
  measurementId: "G-G7X2X13PG6"
};

// Initialize Firebase
const app1 = initializeApp(vendAuth, 'venAuth');
const analytics = getAnalytics(app1);
const auth = getAuth(app1)
export {app1,auth}