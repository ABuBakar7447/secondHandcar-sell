import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, signInWithPopup, updateProfile} from 'firebase/auth'
import app from '../Firebase/Firebase.config';



export const AuthContext = createContext()
const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    
   const createUser = (email,password) =>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
   }

   
   const providerGoogleLogin = (provider) =>{
    setLoading(true);
    return signInWithPopup(auth, provider);
    }

    const logInUser = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }


    
    const userLogOut =()=>{
    
        return signOut(auth)
       }



    const editUser =(username)=>{
        return updateProfile(auth.currentUser,username)
    }
    
   
   useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, currentUser =>{
        console.log(currentUser);
        setUser(currentUser);
        setLoading(false);
    });

    return () => {
        return unsubscribe();
    }
   } ,[])

    const authInfo = {user, loading, createUser, logInUser, providerGoogleLogin, userLogOut, editUser}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;