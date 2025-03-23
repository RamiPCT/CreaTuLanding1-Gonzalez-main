// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBftXZXIduRSBF8Sqr7fwOq-yMM4RtlAgk",
  authDomain: "fir-reactentregaramiro.firebaseapp.com",
  projectId: "fir-reactentregaramiro",
  storageBucket: "fir-reactentregaramiro.firebasestorage.app",
  messagingSenderId: "551715003365",
  appId: "1:551715003365:web:61a30254426476d5daed0c",
  measurementId: "G-D3KFGL7RZQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Exporta Firestore
export const db = getFirestore(app);