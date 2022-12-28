// THIS CODE(firebaseconfig = {...} & firebaseApp = initializeApp(...)) is given from: firebase -> Web Link -> Create name -> Firebase will then generate the code below for us to use.
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

/*Use 'doc' to get the doc instance, getDoc gets the 'doc data', ...
collection & writeBatch methods will be used to get our shop-data.js product data into our firebase DB
* query, setDocs - Used to get our documents from firebase for our product information
*/
import { getFirestore, doc, getDoc, setDoc, collection, writeBatch, query, getDocs } from "firebase/firestore";

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

/*****************************************************************/

/*This is for ADDING IN our COLLECTION and DOCUMENTS into firebase DB. 
collection key is the name in our db(users, categories, etc.), in this case we want our key to be named 'categories'.
objectsToAdd - this is our json objects of product item information that we want to add. (shirts {...}, hats {...}, jackets{...}, ...)
*/
export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = collection(db, collectionKey);

  //we are making a batch and it calls 'writeBatch' that returns us a batch and we need to PASS it the DB
  const batch = writeBatch(db);

  //we will have 5 objects: hats, pants, jackets, hats, shoes({title: "Shirts", items: [...] }, {title: Pants", items: [...] }), ...)
  objectsToAdd.forEach((object) => {
    //this tells the doc method WHICH DB we are using
    const docRef = doc(collectionRef, object.title.toLowerCase());

    //object is our ENTIRE Batch, we are setting it with the object
    batch.set(docRef, object);
  });

  //we need to await the batch because we are iterating through the 40+ products
  await batch.commit();
  console.log("Collection has been imported into Firebase DB");
};

//FETCH product data from our firebase db
export const getCategoriesAndDocuments = async () => {
  //passing in db and our collectionKey name we created in firebase to store all of our five product types, 'categories'. This connects to our database and returns back the collection in our firebase named 'categories'
  const collectRef = collection(db, "categories");
  const q = query(collectRef);
  //getDocs = FETCH the document Snapshots that we want. Snapshot is the actual data itself
  const querySnapshot = await getDocs(q);

  //We are doing a reduce to end up with an object of all the products. There will be 5 iterations because we have 5 TYPES of clothing(shirts, pants, jackets, hats, and shoes). we are passing in a empty object as the initial value
  const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    //collecting individual objects each iteration and placing it into our object. Once complete we return it in the categoryMap variable
    const { title, items } = docSnapshot.data();

    // i.e. hats: array(6)
    acc[title.toLowerCase()] = items;
    // console.log("acc: ", acc);
    return acc;
  }, {});

  return categoryMap;
};

/* JSON Object Structure
{
  shirts: {
    title: "Shirts",
    items: [
      {
        id: ...,
        description: "...",
        price: ...,
        imageUrl: "....jpg",
      },
      {...},
    ]
  },
  pants: {
    title: ...
    items: [
      {...},
      {...},
    ]
  }
  ...
}
*/
/*****************************************************************/

export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
  //If userAuth is NOT PROVIDED then we will exit the function
  if (!userAuth) return;

  //(our database, collection name, some unique id in this case we want uid when we attempt to login using google popup)
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
      //Pass in our document reference AND the data we want to SET it with. additionalInformation will overwrite the NULL displayName upon user signing up
      await setDoc(userDocRef, { displayName, email, createdAt, ...additionalInformation });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }

  //If USER DATA does EXIST simply returns it
  return userDocRef;
};

//We want a email and password string
export const createAuthUserWithEmailAndPassword = async (email, password) => {
  //If either Email or Password is NOT PROVIDED then we will exit the function
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

//We want a email and password string
export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  //If either Email or Password is NOT PROVIDED then we will exit the function
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};
