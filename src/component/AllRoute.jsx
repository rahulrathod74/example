import React from 'react'
import {Routes,Route} from "react-router-dom"
import Home from '../page/Home'
import About from '../page/About'
import Login from '../page/Login'
import Contact from '../page/Contact'
import PrivateRoute from './PrivateRoute'
const AllRoute = () => {
  return (
    <Routes>
        <Route path='/' element={
        <PrivateRoute>

          <Home/>
        </PrivateRoute> 
        }/>
        <Route path='/about' element={
          <PrivateRoute>
            <About/>
          </PrivateRoute>
        
        }/>
        <Route path='/contact' element={
          <PrivateRoute>
             <Contact/>
          </PrivateRoute>
       
        }/>
        <Route path='/login' element={<Login/>}/>
    </Routes>
  )
}

export default AllRoute