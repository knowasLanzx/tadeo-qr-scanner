// plugins/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCRYzKlqmkZoQ8gCtIAY7ghFUbWJhuQBmQ",
  authDomain: "dejesus-qr-scanner.firebaseapp.com",
  projectId: "dejesus-qr-scanner",
  storageBucket: "dejesus-qr-scanner.firebasestorage.app",
  messagingSenderId: "346447380298",
  appId: "1:346447380298:web:1f512391569464d5570bb3",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup };
