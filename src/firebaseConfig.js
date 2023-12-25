// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCV_I2qRQRxwQ6sXr6l4TYVICFn94ZBiI0",
  authDomain: "profolio-24a25.firebaseapp.com",
  projectId: "profolio-24a25",
  storageBucket: "profolio-24a25.appspot.com",
  messagingSenderId: "405018793898",
  appId: "1:405018793898:web:ef83dcddade6bc5ef47dd3",
  measurementId: "G-NGS1KHR1LM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db =  getFirestore(app);
export {db};
