import React,{useEffect,useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { auth } from "../components/firebase";
export const AuthContext=React.createContext();
const AuthContextProvider = ({children}) => {
    const history=useNavigate()
    const [loading,setLoading]=useState(true)
    const [user,setUser]=useState(false)
    useEffect(()=>{
        auth.onAuthStateChanged(user=>{
            setLoading(false)
            setUser(user)
            if(user) history('/chats')
        })
    },[user,history])

    return (
        <>
            {loading && 'loading...'}
            <AuthContext.Provider value={user}>
                {!loading && children}
            </AuthContext.Provider>    
        </>
    );
};

export default AuthContextProvider;