
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBYSe1cwy-yyh7oqVBHbGXQs2z5UKQ_mTY",
  authDomain: "instagram-clone-4d87d.firebaseapp.com",
  projectId: "instagram-clone-4d87d",
  storageBucket: "instagram-clone-4d87d.appspot.com",
  messagingSenderId: "95001907347",
  appId: "1:95001907347:web:2a28e461ffcdacf0c2fd66"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth();