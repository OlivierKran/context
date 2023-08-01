import React, { useState, useEffect, useContext, createContext } from 'react';

const AuthContext = createContext();

export function AuthProvider(props){
    const [authUser, setAuthUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const value =  {
        authUser,
        setAuthUser,
        isLoggedIn,
        setIsLoggedIn,
    }

    return (
        <AuthContext.Provider value={value}></AuthContext.Provider>
    )
}