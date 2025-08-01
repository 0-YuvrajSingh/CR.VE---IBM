import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBrML-wcyhjRumYn1hjKVAsP8Ppic3dQzo",
  authDomain: "codebase-ccc2f.firebaseapp.com",
  projectId: "codebase-ccc2f",
  storageBucket: "codebase-ccc2f.firebasestorage.app",
  messagingSenderId: "501371566731",
  appId: "1:501371566731:web:2c9515a62bfa5dac08728e"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);