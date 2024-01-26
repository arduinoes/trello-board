import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "1",
  appId: "",
  measurementId: ""
};


const firebase = initializeApp(firebaseConfig);
const db = getFirestore(firebase);

export { db };
