import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC1o8DHrQRhFeFbOxvNq_gjQOPbmihu12c",
  authDomain: "react-portfolio-42355.firebaseapp.com",
  projectId: "react-portfolio-42355",
  storageBucket: "react-portfolio-42355.appspot.com",
  messagingSenderId: "956420331939",
  appId: "1:956420331939:web:e1e20c50ba64c89c7b6216",
  measurementId: "G-LPCWY52121",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export default db;
