import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Registration from '../Registration'
import axios from 'axios'
const Login = () => {


const navigate=useNavigate()
  const[login,setLogin]=useState({
    email:"",
    password:"",
  })
    const handleChange=(event)=>{
      const {name,value}=event.target;
      setLogin({
        ...login, [name]:value
      })
    }
   

   const handle_login=(event)=>{
    event.preventDefault();
    axios.post('http://localhost:8000/logging',login)
    .then(res=>{
            
      if(res.data.message==="logedin"){
       navigate('/')
       localStorage.setItem('username',login.email)
       
      }else {
        window.alert("invalid cerendential")
        
      }

    }).catch(e=>{
      console.log(e)
    })
   
   }
  return (
    <div className='container bg-body-tertiary ' style={{height:"00vh"}}>
    <div className='row'>
    <div className='col-md-5 login_form_col1 bg-body-tertiary'>
    
    <form onSubmit={handle_login}>

   <h3 className='my-3'>Login Here</h3>
    <div class="form-outline mb-4">
    
      <input type="email"
       id="form2Example1"
        class="form-control"
        placeholder='Email' 
        name='email'
        value={login.email}
        onChange={handleChange}
        />
      
    </div>
  
   
    <div class="form-outline mb-4">
    
      <input type="password" 
      id="form2Example2" 
      class="form-control"
      placeholder='Password' 
      name='password'
      value={login.password}
      onChange={handleChange}
      />
      
    </div>
  
    
    <div class="row mb-4">
      <div class="col d-flex justify-content-center">
    
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="form2Example31" checked />
          <label class="form-check-label" for="form2Example31"> Remember me </label>
        </div>
      </div>
  
      <div class="col">
        
        <a href="#!">Forgot password?</a>
      </div>
    </div>
  
    
    <button type="submit" class="btn btn-primary btn-block mb-4">Sign in</button>
    </form>
   
    <div class="text-center">
      <p>Not a member? <Link>Register</Link></p>
      <p>or sign up with:</p>
      <button type="button" class="btn btn-link btn-floating mx-1">
        <i class="fab fa-facebook-f"></i>
      </button>
  
      <button type="button" class="btn btn-link btn-floating mx-1">
        <i class="fab fa-google"></i>
      </button>
  
      <button type="button" class="btn btn-link btn-floating mx-1">
        <i class="fab fa-twitter"></i>
      </button>
  
      <button type="button" class="btn btn-link btn-floating mx-1">
        <i class="fab fa-github"></i>
      </button>
    </div>
  
    </div>
    
    
    <div className='col-md-6 offset-1 '>
    <Registration/>
    </div>
    </div>
      
    </div>
  )
}

export default Login
