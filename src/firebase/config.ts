// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCnXX9_fDMLxzdYY6OtSUoh8mZE9nCaozg",
  authDomain: "fw-shop-28a91.firebaseapp.com",
  projectId: "fw-shop-28a91",
  storageBucket: "fw-shop-28a91.firebasestorage.app",
  messagingSenderId: "36643113938",
  appId: "1:36643113938:web:023ee42dd76519ed03160b",
  measurementId: "G-BL5QFHK4JX",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const analytics = getAnalytics(firebaseApp);

export const db = getFirestore(firebaseApp);
