import firebase from "firebase/app"
import "firebase/auth"
export const auth = firebase.initializeApp({
    apiKey: "AIzaSyDxIHusYLhirUIUKOwoDNnMKNZ-MOgKU6U",
    authDomain: "mehrdadgram-7b736.firebaseapp.com",
    projectId: "mehrdadgram-7b736",
    storageBucket: "mehrdadgram-7b736.appspot.com",
    messagingSenderId: "638740629980",
    appId: "1:638740629980:web:97598a84501a012da86719"
}).auth()
