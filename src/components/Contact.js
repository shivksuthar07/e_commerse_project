import React from 'react'

const Contact = () => {
  return (
    <div>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14871998.41157288!2d67.72365176438093!3d24.49034227996945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3782e184e8c2cd%3A0xcf5255f5f8e1483c!2sTechnical%20Hub!5e0!3m2!1sen!2sin!4v1688972426231!5m2!1sen!2sin" width="100%" height="350" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    <div className='container contact_form'>
    <div className='row d-flex justify-content-center align-items-center'>
    <div className='col-md-5'>
    <h1 className='free_info'>FEEL FREE TO</h1>
    <h1>CONTACT US</h1>
    </div>


    <div className=' col-md-5'>
    <form>
    <h4 className='mt-4 mb-2 '>Fill the form</h4>
    
    <input 
    placeholder='Enter your Name' 
    className='form-control w-100 my-3'
    type='text'
    name='name'
    />
    <input placeholder='Enter your Email'
     className='form-control w-100 my-3'
     type='email'
     name='email'
     />
    <input placeholder='Enter Mobile Number' 
    className='form-control w-100 my-3'
    type='number'
    name='number'
    />
    <textarea 
    className='form-control w-100 my-3'
    placeholder='Comment-here'
    name='comment'
    />
  
    <input type='submit' className='btn btn-primary my-2 w-100'/>
    </form>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Contact
