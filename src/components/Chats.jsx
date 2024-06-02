import React,{useEffect,useContext, useState} from 'react';
import { ChatEngine } from 'react-chat-engine';
import { useNavigate } from 'react-router-dom';
import { auth } from './firebase.js';
import { AuthContext } from '../contexts/AuthContextProvider.jsx'
import axios from 'axios';

const Chats = () => {
    const user=useContext(AuthContext)
    const history=useNavigate()
    const [loading,setLoading]=useState(true)

    const LogOut=async()=>{
        await auth.signOut()
        history('/')
    }
    useEffect(()=>{
        if(!user){ history('/')
        return;
        }
        console.log("user.email", user.email);
        console.log("user.uid", user.uid);
        axios.get("https://api.chatengine.io/users/me",{
            headers:{
                'project-id':'e10759d8-a6ba-4de0-b958-ace1c57a312d',
                'user-name':user.email,
                'user-secret':user.uid
            }
        })
        .then(()=>{
            setLoading(false)
        })
        .catch((e)=>{
            console.log("hereeee", e);
            let formdata=new FormData()
            formdata.append('email',user.email)
            formdata.append('username',user.email)
            formdata.append('secret',user.uid)
            getFile(user.photoURL)
            .then(avatar=>{
                console.log(avatar);
                formdata.append('avatar',avatar,avatar.name)
                axios.post("https://api.chatengine.io/users",formdata,{
                    headers:{
                        'private-key':'90bc0c27-cc15-48dd-9e65-6f8126b9229b'
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
                <ChatEngine height='100vh' projectID='bf6d0299-4448-468f-ad69-8f23bf394356' userName={user.email} userSecret={user.uid} />
            </div>
        </div>
    );
};

export default Chats;
