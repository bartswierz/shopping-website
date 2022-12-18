// THIS CODE(firebaseconfig = {...} & firebaseApp = initializeApp(...)) is given from: firebase -> Web Link -> Create name -> Firebase will then generate the code below for us to use.
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

//Use 'doc' to get the doc instance, getDoc gets the 'doc data', ...
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

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
const googleProvider = new GoogleAuthProvider();

// Everytime someone interacts with provider, we want to Select an account
googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

// We are passing in auth and provider that we have created above
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);

export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

//Using to access our database by pointing directly at our database inside the console on firebase site
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  //(our database, collections, some unique id in this case we want uid when we attempt to login using google popup)
  const userDocRef = doc(db, "users", userAuth.uid);
  console.log("userDocRef: ", userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log("userSnapshot: ", userSnapshot);
  console.log("userSnapshot exists: ", userSnapshot.exists());

  //if USER DATA does NOT EXIST then this returns true and does this
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;

    //Time so we know WHEN user SIGNS IN
    const createdAt = new Date();

    try {
      //Pass in our document reference AND the data we want to SET it with
      await setDoc(userDocRef, { displayName, email, createdAt });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }

  //If USER DATA does EXIST simply returns it
  return userDocRef;
};
