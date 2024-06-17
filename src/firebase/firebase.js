import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB2N8Yv4U1OLnFCCdj9zvDISr9Xa8Yh3R0",
  authDomain: "futuremind-fbb2f.firebaseapp.com",
  projectId: "futuremind-fbb2f",
  storageBucket: "futuremind-fbb2f.appspot.com",
  messagingSenderId: "1062475939853",
  appId: "1:1062475939853:web:7070bde4eb79f74d1e9544",
  measurementId: "G-PS2BD94DLD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app);
const db = getFirestore(app);

export { app, auth, storage, db };