import React, { useContext, useState } from 'react'
import axios from "axios"
import { AuthContext } from '../component/AuthContext'
import { Navigate } from 'react-router-dom'
const Login = () => {
  const [email,setEmail]=useState("")
  const[password,setPassword]=useState("")
  const {login,auth:{isLogged}}=useContext(AuthContext)
  async function handleClick(){
   try {
    let res=await axios({
       method:"post",
       url:"https://reqres.in/api/login",
       data:{
         email,
         password
       }
    })
    login(res.data.token)
   } catch (error) {
    console.log(error)
   }
  }
  if(isLogged){
    return<Navigate to="/about"/>
  }
  return (
    <div>
      <h1>Login Page</h1>
      <input type="email" placeholder='Enter your email'  value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
      <input type="password" placeholder='Enter your password' value={password} onChange={(e)=>{setPassword(e.target.value)}} />
      <button onClick={handleClick}>login</button>
    </div>
  )
}

export default Login