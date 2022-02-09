// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5uMqogqnJIdZM70Tin4ll6NIFaSFE8jU",
  authDomain: "olxpakistan-a9f1c.firebaseapp.com",
  projectId: "olxpakistan-a9f1c",
  storageBucket: "olxpakistan-a9f1c.appspot.com",
  messagingSenderId: "702306597424",
  appId: "1:702306597424:web:92e609fe7754193f32cbf5",
  measurementId: "G-2314EWSR80",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();

export const db = getFirestore();
