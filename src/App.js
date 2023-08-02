import React from 'react'
import Navbar from './components/Navbar'
import {Routes,Route } from 'react-router-dom'
import Home from './components/Home'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Audi from './comonent_input/carsinput/Audi'

import Products from './Products'
import Single_page from './comonent_input/Single_page'
import Bmw from './comonent_input/carsinput/Bmw'
import Hundai from './comonent_input/carsinput/Hundai'
import Login from './components/Login'
import Cart from './Cart'
const App = () => {
  return (
    <div>
     <Navbar/>
    
   
     <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/contact' element={<Contact/>}/>
     <Route path='/product' element={<Products/>}/>
     <Route path='/login' element={<Login/>}/>
     <Route path='/cart' element={<Cart/>}/>
     <Route path='/single_page/:id' element={<Single_page/>}/>
     <Route path='/audi' element={<Audi/>}/>
     <Route path='/bmw' element={<Bmw/>}/>
     <Route path='/hundai' element={<Hundai/>}/>
     </Routes>
     
     <Footer/>

    </div>
  )
}

export default App
