import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9iM30VRJ2akzwynWA81ZvMxYRNN7fzlw",
  authDomain: "coderhouse-alejandrospengler.firebaseapp.com",
  projectId: "coderhouse-alejandrospengler",
  storageBucket: "coderhouse-alejandrospengler.appspot.com",
  messagingSenderId: "402433490118",
  appId: "1:402433490118:web:26fc8b1f237f8312e16bc7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore()