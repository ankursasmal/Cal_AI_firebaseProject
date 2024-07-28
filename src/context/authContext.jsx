import { useContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { initializeApp } from "firebase/app";

const authContext=React.createContext();

export function useAuth(){
    return useContext(authContext);
}

export function authProvider({children}){
    let [user,setUser]=useState(null);
    let [userLogin,setuserLogin]=useState(false);
    const [loading,setLoading]=useState(true);
useEffect(()=>{
    let unAuthorize=onAuthStateChanged(auth,initializeUser);
    return unAuthorize;
},[])

async function initializeUser(user){
    if(user){
        setUser({...user});
        setuserLogin(true);

    }
    else{
        setUser(null);
        setuserLogin(false);
    }
    setLoading(false)
}

const value={
    user,userLogin,loading
}
return(
<authContext.Provider value={value}>
    {!loading && children}
</authContext.Provider>

)
}