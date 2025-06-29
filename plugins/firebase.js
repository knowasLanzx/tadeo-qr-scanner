// plugins/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
 apiKey: "AIzaSyCemFa7mKMVMU3P3HqFRuc3GYWXF4DayP4",
  authDomain: "tadeo-qr-scanner-61b18.firebaseapp.com",
  projectId: "tadeo-qr-scanner-61b18",
  storageBucket: "tadeo-qr-scanner-61b18.firebasestorage.app",
  messagingSenderId: "951443172357",
  appId: "1:951443172357:web:010d37d0116538f352c06c",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup };
