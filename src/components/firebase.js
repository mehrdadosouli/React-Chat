import firebase from "firebase/app"
import "firebase/auth"
export const auth = firebase.initializeApp({
    apiKey: "AIzaSyCUIivY1PVOClkAn0DGvHh9Yj2m_Rg64Q8",
    authDomain: "chatengin-b6fed.firebaseapp.com",
    projectId: "chatengin-b6fed",
    storageBucket: "chatengin-b6fed.appspot.com",
    messagingSenderId: "779651347232",
    appId: "1:779651347232:web:089fdd8ad5f88736765d45"
}).auth()
