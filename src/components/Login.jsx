import React from 'react';
import firebase from 'firebase/app';
import {auth} from "./firebase.js"
const Login = () => {
    return (
        <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',width:'100%',height:'100vh'}}>
            <h2>wellcome to my chatEngim</h2>
            <h2 style={{cursor:'pointer',boxShadow:'0 0 2px 1px gray',padding:'1rem'}} onClick={()=>auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}>sign in with google</h2>
        </div>
    );
};

export default Login;