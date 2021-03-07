// For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyApT707QeSFUVNMjqgZJR_g51VHOwUyS7g",
    authDomain: "unsplash-c7c3a.firebaseapp.com",
    projectId: "unsplash-c7c3a",
    storageBucket: "unsplash-c7c3a.appspot.com",
    messagingSenderId: "716576990728",
    appId: "1:716576990728:web:7a332498ea8a25fce193bd",
    measurementId: "G-KZFHEZ4YL9"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };