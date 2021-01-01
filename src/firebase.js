import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCrBdPtWh5L3MTqqyToLqK-2F0b3YC2LuU",
  authDomain: "clone-1944b.firebaseapp.com",
  projectId: "clone-1944b",
  storageBucket: "clone-1944b.appspot.com",
  messagingSenderId: "879028085660",
  appId: "1:879028085660:web:c348b5d372bb1e0629de59",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
