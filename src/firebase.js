
import "firebase/auth";
import "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBg9ct47akMyRlICQ98X2UwTc1k1m883Ds",
  authDomain: "ytcloneyt.firebaseapp.com",
  projectId: "ytcloneyt",
  storageBucket: "ytcloneyt.appspot.com",
  messagingSenderId: "462983640268",
  appId: "1:462983640268:web:62d2a14a097c5310ba7e69",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, firestore }; // Export individual Firebase services
export default app; // Export the initialized Firebase app
