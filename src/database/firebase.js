// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { GoogleAuthProvider, getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDULS7NZ6JySO3p9wS5Fx_0lN7-4WQIXXU",
  authDomain: "pawesomecare-e537c.firebaseapp.com",
  projectId: "pawesomecare-e537c",
  storageBucket: "pawesomecare-e537c.appspot.com",
  messagingSenderId: "905847748423",
  appId: "1:905847748423:web:7538d720a0d4203e02fe62",
  measurementId: "G-PMSFGKMGX3"

  };


const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)

const provider = new GoogleAuthProvider()

export { app, provider, auth, db }