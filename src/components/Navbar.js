import React from 'react'
import { Link } from 'react-router-dom'
import "./comp.css"
const Navbar = () => {

  return (
    <div>
    <nav class="navbar navbar-expand-lg bg-info">
    <div class="container-fluid">
      <Link class="navbar-brand mx-5 fw-bold" to='/' >CAR-PHARMA</Link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse " id="navbarNav">
        <ul class="navbar-nav nav_ul">
          <li class="nav-item list_items">
            <Link to='/'>HOME</Link>
          </li>
          <li class="nav-item list_items">
          <Link to='/contact'>CONTACT</Link>
        </li>
        <li class="nav-item list_items">
        <Link to='/product'>PRODUCTS</Link>
      </li>
        <li class="nav-item list_items">
        <Link to='/login'>LOGIN</Link>
      </li>

      <li class="nav-item list_items">
      
    </li>
      
      <li class="nav-item list_items">
        <Link to='/cart'><i class="fa-solid fa-cart-shopping"><sup style={{color:"green"}}> {2}</sup></i></Link>
      </li>
      
        </ul>
      </div>
    </div>
  </nav>
 
    </div>
  )
}

export default Navbar
