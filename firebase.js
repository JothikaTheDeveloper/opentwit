// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD2hpPO9Pag5_A3iz1wWGqu7Cgms2HgNi4",
    authDomain: "open-twit.firebaseapp.com",
    projectId: "open-twit",
    storageBucket: "open-twit.appspot.com",
    messagingSenderId: "735597966673",
    appId: "1:735597966673:web:7fcc2f69b3278a1606cf70"
  };

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };