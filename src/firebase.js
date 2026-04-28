import { initializeApp } from "firebase/app";

// firebase.js - Firebase initialization file
// firebase.js - Fichier d'initialisation Firebase
// The Firebase config object contains keys for connecting to a Firebase project.
const firebaseConfig = {
  apiKey: "AIzaSyCKIscz1XmHLCFukqT1arm60uwql2htxlQ",
  authDomain: "devroadmap-3897c.firebaseapp.com",
  projectId: "devroadmap-3897c",
  storageBucket: "devroadmap-3897c.firebasestorage.app",
  messagingSenderId: "363898380087",
  appId: "1:363898380087:web:fe439ed53cae390d2d04b2",
};

const app = initializeApp(firebaseConfig);

export default app;
