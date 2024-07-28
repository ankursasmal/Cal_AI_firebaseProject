 import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyASAKs-m79ar-gn9RjayK55TxzJikl_7jA",
  authDomain: "test-8432e.firebaseapp.com",
  projectId: "test-8432e",
  storageBucket: "test-8432e.appspot.com",
  messagingSenderId: "184314989926",
  appId: "1:184314989926:web:03b121af1f95082a54cca7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
const db=getFirestore(app);
export {app,auth,db}