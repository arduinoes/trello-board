import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "XXXXX",
  authDomain: "XXXXX",
  databaseURL: "XXXXX",
  projectId: "XXXXX",
  storageBucket: "XXXXX",
  messagingSenderId: "XXXXX",
  appId: "XXXXX",
  measurementId: "XXXXX"
};

const firebase = initializeApp(firebaseConfig);
const db = getFirestore(firebase);

export { db };
