// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA22FcLydhuliTA4AH213_m2zlirjMawOk",
  authDomain: "netflix-clone-18824.firebaseapp.com",
  databaseURL: "https://netflix-clone-18824.firebaseio.com",
  projectId: "netflix-clone-18824",
  storageBucket: "netflix-clone-18824.appspot.com",
  messagingSenderId: "269413776094",
  appId: "1:269413776094:web:85a8329de8b554c081a04f",
  measurementId: "G-76B43R41M0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
