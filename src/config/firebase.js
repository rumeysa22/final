import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider  } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDNkHnL7rEzf-lRi7oXGFTArcaS3z_p0dU",
  authDomain: "final-76219.firebaseapp.com",
  projectId: "final-76219",
  storageBucket: "final-76219.appspot.com",
  messagingSenderId: "1080124073657",
  appId: "1:1080124073657:web:6855913da334cbcb3fdd68",
  measurementId: "G-6DMV7LS83W"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);