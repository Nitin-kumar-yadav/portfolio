// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyATMgJRp13SD27pZ3TVoErVG-pTUAXJJb4",
    authDomain: "nitin-portfoli.firebaseapp.com",
    projectId: "nitin-portfoli",
    storageBucket: "nitin-portfoli.appspot.com",
    messagingSenderId: "962146383885",
    appId: "1:962146383885:web:7d8a2804faa178f2ff3d44",
    measurementId: "G-4NZ2QKV67Q"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const db = getFirestore(app);