import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import {getStorage} from "firebase/storage";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBCrdey-hP2POTiHUA_W3zam08mMfnbwlI",
  authDomain: "chat-8dbf2.firebaseapp.com",
  projectId: "chat-8dbf2",
  storageBucket: "chat-8dbf2.appspot.com",
  messagingSenderId: "953569113095",
  appId: "1:953569113095:web:9e710f97b5d56f4958a6a2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();