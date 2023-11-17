import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import AuthContextProvider  from './contexts/AuthContextProvider';
import Chats from './components/Chats'
const App = () => {

    return (
        <>
            <AuthContextProvider>
                <Routes>
                    <Route path='/chats' element={<Chats />} />
                    <Route path='/' element={<Login />} />
                </Routes>
            </AuthContextProvider>
        </>
    )
};

export default App;
