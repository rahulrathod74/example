import { createContext, useState } from "react";

export const AuthContext=createContext()

export function AuthContextProvider({children}){
    const [auth,setAuth]=useState({
        isLogged:false,
        token:null,
    })
    const login=(token)=>{
        setAuth({
            isLogged:true,
            token:token
        })
    }
    const logout=()=>{
        setAuth({
            isLogged:false,
            token:null

        })
    }
    return(
        <AuthContext.Provider value={{auth,login,logout}}>
            {children}
        </AuthContext.Provider>
    )
}

arr=[1,3,4,5,8]
n=5
ans=[]
ans1=[]
for(i=0;i<n;i++){
    ans.push(arr[i])
    ans1.push(arr[i])
}