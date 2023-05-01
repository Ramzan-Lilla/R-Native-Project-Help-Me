// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCv541tB209f-nGgzt7P8hbTv9MmjZS1yU",
  authDomain: "fyp-cust-auth.firebaseapp.com",
  projectId: "fyp-cust-auth",
  storageBucket: "fyp-cust-auth.appspot.com",
  messagingSenderId: "721393084917",
  appId: "1:721393084917:web:25c20eb29f337b2686d8bc",
  measurementId: "G-GZMPC0MM8Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)

export {app,auth}