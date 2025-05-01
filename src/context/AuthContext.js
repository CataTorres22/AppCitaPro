import React,{createContext, useContext, useState, useEffect} from 'react'
import {onAuthStateChanged} from 'firebase/auth'
import {auth} from '../services/firebaseConfig'
import { Zocial } from '@expo/vector-icons'

const AutContext = createContext()

export const AuthProvider= ({children})=>{
    const [user , setUser]=useState(null)
    useEffect(()=>{
        const unsubscribe= onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
        })
        return unsubscribe
    },[])
    return(
    <AuthContext.Provider values={{user,setUser}}>
        {cñlidren}
    </AuthContext.Provider>     
    )
}