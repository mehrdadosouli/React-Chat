import firebase from "firebase/app"
import "firebase/auth"
export const auth = firebase.initializeApp({
    apiKey: "90bc0c27-cc15-48dd-9e65-6f8126b9229b",
    authDomain: "mehrdadgram-7b736.firebaseapp.com",
    projectId: "bf6d0299-4448-468f-ad69-8f23bf394356",
    storageBucket: "mehrdadgram-7b736.appspot.com",
    messagingSenderId: "638740629980",
    appId: "1:638740629980:web:97598a84501a012da86719"
}).auth()
