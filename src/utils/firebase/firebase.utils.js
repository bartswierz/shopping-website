// THIS CODE(firebaseconfig = {...} & firebaseApp = initializeApp(...)) is given from: firebase -> Web Link -> Create name -> Firebase will then generate the code below for us to use.
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1BNATztbvx_wtjXV4POi7JpLAx1e-PlI",
  authDomain: "alpha-clothing-db-54c26.firebaseapp.com",
  projectId: "alpha-clothing-db-54c26",
  storageBucket: "alpha-clothing-db-54c26.appspot.com",
  messagingSenderId: "512701859115",
  appId: "1:512701859115:web:facbc7374100e2aa17716e",
};

// Initialize Firebase - firebaseApp will allow us to do CRUD by using this initalized instance from firebase
const firebaseApp = initializeApp(firebaseConfig);

// Will create a GoogleAuthProvider instance
const provider = new GoogleAuthProvider();

// Everytime someone interacts with provider, we want to Select an account
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

// We are passing in auth and provider that we have created above
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
