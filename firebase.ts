import {getApp, getApps, initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtZoH0Bua-4QCiakgpjGvD0ppBqnrvXhM",
  authDomain: "chatgpt-messenger-f4a39.firebaseapp.com",
  projectId: "chatgpt-messenger-f4a39",
  storageBucket: "chatgpt-messenger-f4a39.appspot.com",
  messagingSenderId: "843528547234",
  appId: "1:843528547234:web:5dfdd6d5b08f369e3ea0fb"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig)
const db = getFirestore(app);

export {db};