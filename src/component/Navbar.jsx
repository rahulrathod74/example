import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from './AuthContext'
let data=[
    {
        to:'/',
        title:"HOME"
    },
    {
        to:'/about',
        title:"ABOUT"
    },
    {
        to:"contact",
        title:"CONTACT"
    },
    {
        to:'/login',
        title:"LOGIN"
    }
]
const Navbar = () => {
    const {logout}=useContext(AuthContext)
  return (
    <div style={{display:"flex",justifyContent:"space-around"}}>
        {data.map((e)=>(
            <Link key={e.to} to={e.to}>
                {e.title}
            </Link>
        ))}
        <button onClick={logout}>LOGOUT</button>
    </div>
  )
}

export default Navbar