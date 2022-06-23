import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAkssPLQ9hcvbQ_omDgD9UacuvT6werewI",
  authDomain: "clone-84205.firebaseapp.com",
  projectId: "clone-84205",
  storageBucket: "clone-84205.appspot.com",
  messagingSenderId: "94188564454",
  appId: "1:94188564454:web:56cc86be3a0cb059573027",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, db, provider };
