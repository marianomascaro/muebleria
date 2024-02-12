import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY_FIREBASE_CONFIG,
  authDomain: "mubleria-los-pinos.firebaseapp.com",
  projectId: "mubleria-los-pinos",
  storageBucket: "mubleria-los-pinos.appspot.com",
  messagingSenderId: "217163595698",
  appId: "1:217163595698:web:c8621979a7d4b0114ceeab"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)