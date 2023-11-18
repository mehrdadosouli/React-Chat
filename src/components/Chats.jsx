import React,{useEffect,useState,useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from './firebase.js';
import { ChatEngine } from 'react-chat-engine';
import { AuthContext } from '../contexts/AuthContextProvider.jsx'
const Chats = () => {
    const user=useContext(AuthContext)
    const history=useNavigate()
    const [loading,setLoading]=[true]

    const LogOut=async()=>{
        await auth.signOut()
        history('/')
    }
    useEffect(()=>{
        if(!user){ history('/')
        return;
        }
        axios.get('https://api.chatengine.io/users/me',{
            Headers:{
                'project-id':'',
                'user-name':user.name,
                'user-id':user.uid
            }
        })
        .then(()=>{
            setLoading(false)
        })
        .catch(()=>{
            let formData=new FormData()
        })
    },[user,loading])

    if(!user || loading) return 'loading...'
    return (
        <div>
            
            <h2>chats</h2>
            <h3 onClick={LogOut}>LogOut</h3>
            <div>
                <ChatEngine height='100vh' projectId='' userName='.' userSecret='.' />
            </div>
        </div>
    );
};

export default Chats;
