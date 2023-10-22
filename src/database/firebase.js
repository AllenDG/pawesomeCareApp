<<<<<<< HEAD
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { GoogleAuthProvider, getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
=======

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import auth from '@react-native-firebase/auth';

>>>>>>> afa7adbe0d6b4d550fe5c3d67f2633a2ba78d0b9

const firebaseConfig = {
  apiKey: "AIzaSyDULS7NZ6JySO3p9wS5Fx_0lN7-4WQIXXU",
  authDomain: "pawesomecare-e537c.firebaseapp.com",
  projectId: "pawesomecare-e537c",
  storageBucket: "pawesomecare-e537c.appspot.com",
  messagingSenderId: "905847748423",
  appId: "1:905847748423:web:7538d720a0d4203e02fe62",
  measurementId: "G-PMSFGKMGX3"
<<<<<<< HEAD

  };


const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)

const provider = new GoogleAuthProvider()

export { app, provider, auth, db }
=======
};

if (!auth().apps.length) {
  auth().initializeApp(firebaseConfig);
}


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default auth;
>>>>>>> afa7adbe0d6b4d550fe5c3d67f2633a2ba78d0b9
