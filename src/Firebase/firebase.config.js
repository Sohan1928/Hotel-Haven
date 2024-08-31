// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1w0PTRICjckBDUtHCBEcIs6e1D_IvPP0",
  authDomain: "hotel-haven-9f393.firebaseapp.com",
  projectId: "hotel-haven-9f393",
  storageBucket: "hotel-haven-9f393.appspot.com",
  messagingSenderId: "449792404792",
  appId: "1:449792404792:web:44e0203eda542837db65cd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
