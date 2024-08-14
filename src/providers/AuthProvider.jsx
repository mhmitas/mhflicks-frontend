import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';
import { axiosInstance } from '../hooks/useAxios';


export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        const unsubscribe = () => {
            axiosInstance.get(`/users/current-user`)
                .then(res => {
                    console.log("Current User:", res.data.data);
                    setUser(res.data.data)
                    setLoading(false)
                })
                .catch(err => {
                    console.error("get current user error:", err);
                    setLoading(false)
                })
        }
        return () => unsubscribe()
    }, [])

    const authInfo = {
        user,
        setUser,
        loading,
        setLoading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;