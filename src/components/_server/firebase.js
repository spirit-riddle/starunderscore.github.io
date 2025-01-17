// src/components/_server/firebase.js
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.GATSBY_FIREBASE_API_KEY,
  authDomain: process.env.GATSBY_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.GATSBY_FIREBASE_PROJECT_ID,
  storageBucket: process.env.GATSBY_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.GATSBY_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.GATSBY_FIREBASE_APP_ID,
};

// Initialize Firebase only in the browser
const app = typeof window !== "undefined" && !getApps().length
  ? initializeApp(firebaseConfig)
  : getApps().length
  ? getApp()
  : null;

export const firestore = app ? getFirestore(app) : null;
export const addWaitingListEntry = async (email) => {
  if (!firestore) {
    throw new Error("Firestore is not initialized.");
  }

  const collectionRef = collection(firestore, "pro/waitingList/entries");
  return await addDoc(collectionRef, {
    email,
    timestamp: serverTimestamp(),
  });
};
