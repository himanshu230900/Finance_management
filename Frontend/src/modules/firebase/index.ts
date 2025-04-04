// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, setPersistence, browserLocalPersistence} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC49i6FEOUmJRoEmPH1VUxF5bMJYMT2xek",
  authDomain: "fint-885a4.firebaseapp.com",
  projectId: "fint-885a4",
  storageBucket: "fint-885a4.firebasestorage.app",
  messagingSenderId: "795084226352",
  appId: "1:795084226352:web:252016616771e1899b12f5",
  measurementId: "G-EPMZ7PZQF7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();

setPersistence(auth, browserLocalPersistence)
  .then(() => console.log("Persistence set to browserLocalPersistence"))
  .catch((error) => console.error("Error setting persistence:", error));

export {analytics, auth};