import React from 'react'
 import one from "./images/one.jpg"
 import two from "./images/two.jpg"
import Logodata from '../Logodata'
import { Link } from 'react-router-dom'
import Feature from './Feature'
import Deli_pay from './Deli_pay'
import Trusted from './Trusted'
import { useParams } from 'react-router-dom'
const Home = () => {
 const {id}=useParams()
  return (
    <div>
    <nav class="navbar navbar-expand-lg bg-info-subtle">
  <div class="container-fluid  ">
   
      <ul class="navbar-nav nav_ul2">
        <li class="nav-item mx-3">
          <a class="nav-link active" aria-current="page" href="#">Interior Accessories</a>
        </li>
        <li class="nav-item mx-5">
          <a class="nav-link active" aria-current="page"  href="#">Exterior</a>
        </li>
        <li class="nav-item mx-5">
          <a class="nav-link active" aria-current="page"  href="#">Decor</a>
        </li>
        <li class="nav-item mx-5">
          <a class="nav-link active " aria-current="page" >Tyre & Wheel</a>
        </li>
        <li class="nav-item mx-5">
          <a class="nav-link active " aria-current="page" href='#'>Top Offer</a>
        </li>
      </ul>
    </div>
</nav>
<div className='d-flex justify-content-center mt-5'>
<div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={one} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={two} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span style={{color:"black"}}>Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span style={{color:"black"}}>Next</span>
  </button>
</div>
</div>


<div className='container card_logos'>
<div className='row'>
<h1 className='text-center mt-5 mb-4'>Get Your Spare With Brand Name</h1>




    <div className='col my-2 d-flex justify-content-around justify-content-between' >
    <Link to={`/audi`}>
    <div class="card"  style={{width:"100%",height:"100%"}}>
    <div class="card-body">
      <h5 class="card-title text-center mb-2">AUDI</h5>
      <img src='https://www.freepngimg.com/thumb/car%20logo/28-audi-car-logo-png-brand-image.png' style={{width:"100%"}}/>
    </div>
  </div>
    </Link>
    </div>
    <div className='col my-2 d-flex justify-content-around justify-content-between' >
    <Link to={`/bmw`}>
    <div class="card"  style={{width:"100%",height:"100%"}}>
    <div class="card-body">
      <h5 class="card-title text-center mb-2">BMW</h5>
      <img src='https://listcarbrands.com/wp-content/uploads/2015/10/bmw-logo-black-and-white.jpg' style={{width:"100%"}}/>
    </div>
  </div>
    </Link>
    </div>
    <div className='col my-2 d-flex justify-content-around justify-content-between' >
    <Link to={`/hundai`}>
    <div class="card"  style={{width:"100%",height:"100%"}}>
    <div class="card-body">
      <h5 class="card-title text-center mb-2">HUNDAI</h5>
      <img src='https://purepng.com/public/uploads/medium/purepng.com-hyundai-logohyundaihyundai-carshyundai-manufacturerhyundai-automobileslogo-1701527487368ipii3.png' style={{width:"100%",height:"6rem"}}/>
    </div>
  </div>
    </Link>
    </div>
    <div className='col my-2 d-flex justify-content-around justify-content-between' >
    <Link to={`/logo_input`}>
    <div class="card"  style={{width:"100%",height:"100%"}}>
    <div class="card-body">
      <h5 class="card-title text-center mb-2">FOXWAGON</h5>
      <img src='https://i.pinimg.com/originals/a3/f1/19/a3f11914a0eef8ad3834bca64cc359aa.png' style={{width:"100%"}}/>
    </div>
  </div>
    </Link>
    </div>
    <div className='col my-2 d-flex justify-content-around justify-content-between' >
    <Link to={`/logo_input`}>
    <div class="card"  style={{width:"100%",height:"100%"}}>
    <div class="card-body">
      <h5 class="card-title text-center mb-2">NISAN</h5>
      <img src='http://1.bp.blogspot.com/-XmjU2gE_I7o/VZAV_NPQOvI/AAAAAAAADBA/I4GX7I-LbZk/s1600/Nissan-Black-white-vector-logo.png' style={{width:"100%"}}/>
    </div>
  </div>
    </Link>
    </div>
    <div className='col my-2 d-flex justify-content-around justify-content-between' >
    <Link to={`/logo_input`}>
    <div class="card"  style={{width:"100%",height:"100%"}}>
    <div class="card-body">
      <h5 class="card-title text-center mb-2">TOYOTO</h5>
      <img src='https://clipground.com/images/toyota-logo-png-9.png' style={{width:"100%"}}/>
    </div>
  </div>
    </Link>
    </div>
    <div className='col my-2 d-flex justify-content-around justify-content-between' >
    <Link to={`/logo_input`}>
    <div class="card"  style={{width:"100%",height:"100%"}}>
    <div class="card-body">
      <h5 class="card-title text-center mb-2">SUZUKI</h5>
      <img src='https://pluspng.com/img-png/suzuki-logo-png-suzuki-motorcycle-logo-png-car-suzuki-logo-transparent-png-920x570.jpg' style={{width:"100%"}}/>
    </div>
  </div>
    </Link>
    </div>


</div>

</div>

<Feature/>
<Deli_pay/>
<Trusted/>

</div>
  )
}

export default Home
