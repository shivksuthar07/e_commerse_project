import React, { useState } from 'react'
import axios from 'axios'



const Registration = () => {

  const [user,setUser]=useState({
    name:"",
    email:"",
    password:"",
    cpassword:"",
  });

  const handleData=(event)=>{
    const{name,value}=event.target;
    setUser({
      ...user, [name]:value
    });
  }
  const saveData=(event)=>{
    event.preventDefault();
    axios.post('http://localhost:8000/register',user)
    .then((res)=>{
      if(res.data.message==="success"){
      window.alert("Registration Successfully"
    //  window.location.href='/login'
      )
      }
      console.log(res)
      
    })
    
    .catch(err=>{
      alert("Error exist")
      console.log(err)
    })
  }
 
  return (
    <div className="regi_form">
    <form onSubmit={saveData}>
    <h3 >Sign-in</h3>
    
    <input type='text'
    placeholder='Enter your name'
    className='form-control w-75 my-4'
    name='name'
    value={user.name}
    onChange={handleData}
    />

    <input type='email'
    placeholder='Enter your Email'
    className='form-control w-75 my-4'
    name='email'
    value={user.email}
    onChange={handleData}
    />
    <input type='password'
    placeholder='Enter Password'
    className='form-control w-75  my-4'
    name='password'
    value={user.password}
    onChange={handleData}
    />
    <input type='password'
    placeholder='Confirm-Password'
    className='form-control w-75 my-4'
    name='cpassword'
    value={user.cpassword}
    onChange={handleData}
    />
    <button className='btn btn-success' type='submit'>Sing Up</button>
    </form>
    </div>
  )
}

export default Registration
