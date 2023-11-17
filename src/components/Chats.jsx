import React from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from './firebase.js';
import { ChatEngine } from 'react-chat-engine';
const Chats = () => {
    const history=useNavigate()
    const LogOut=async()=>{
        await auth.signOut()
        history('/')
    }
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