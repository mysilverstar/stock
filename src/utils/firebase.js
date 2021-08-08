import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyDrC-Fz80eWezeDNlscZ_gB9QooILNuJ6k",
  authDomain: "kistone-stock.firebaseapp.com",
  projectId: "kistone-stock",
  storageBucket: "kistone-stock.appspot.com",
  messagingSenderId: "602515706055",
  appId: "1:602515706055:web:271be76a0fdc249f6eeee2",
  measurementId: "G-1CFXPBLJZE",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const Persistence = {
  LOCAL: firebase.auth.Auth.Persistence.LOCAL,
};

const AuthProvider = {
  google: {
    get: new firebase.auth.GoogleAuthProvider(),
    id: "google.com",
  },
};

const auth = firebase.auth();
const db = firebase.firestore();

export { auth, Persistence, AuthProvider, db };
