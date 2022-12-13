import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAW1UURxzxBSaLA8iBla9kP8_AW_7FsjfE",
    authDomain: "linkedin-clone-add94.firebaseapp.com",
    projectId: "linkedin-clone-add94",
    storageBucket: "linkedin-clone-add94.appspot.com",
    messagingSenderId: "63528250709",
    appId: "1:63528250709:web:f6022ce04388419fe293dc"
  };

const fireabaseApp = firebase.initializeApp(firebaseConfig)
const db = fireabaseApp.firestore();
const auth = firebase.auth();

export{ db, auth};