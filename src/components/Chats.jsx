import React,{useEffect,useState,useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from './firebase.js';
import { ChatEngine } from 'react-chat-engine';
import { AuthContext } from '../contexts/AuthContextProvider.jsx'
import axios from 'axios';

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
            headers:{
                'project-id':'bd9df0ce-091a-4c98-a9a1-da91ec367fa3',
                'user-name':user.email,
                'user-secret':user.uid
            }
        })
        .then(()=>{
            setLoading(false)
        })
        .catch(()=>{
            let formdata=new FormData()
            formdata.append('email',user.email)
            formdata.append('username',user.email)
            formdata.append('secret',user.uid)
            getFile(user.photoURL)
            .then(avatar=>{
                formdata.append('avatar',avatar,avatar.name)
                axios.post('https://api.chatengine.io/users/',formdata,{
                    headers:{
                        'private-key':'1569c70a-b195-4e18-9657-36f7c33aa0b2'
                    }
                }) 
                .then(()=>setLoading(false))
                .catch(error=>console.log(error))
            })
        })
    },[user,loading])

    const getFile=async(url)=>{
        let response=await fetch(url)
        let data=await response.blob()
        return new File([data],'image.jpg',{type:'image/jpeg'})
    }
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
