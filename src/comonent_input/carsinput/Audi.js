import React, { useState } from 'react'

import InputItems from './InputItems'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'


const Audi = () => {
  const {id}=useParams()

  const[text,setText]= useState('')
  
  
  return (
    <div className='container-fluid'>
    <div className='grid grid_elem '>
    <div className='bg-light' style={{height:"100vh"}}>
    <h4 className='mt-4 mx-3'>Filter</h4>
    <hr/>
    <form onSubmit={(e)=>e.preventDefault()}>
    <input className='form-group'
    type='text'
    name='text'
    value={text}
    onChange={(e)=>setText(e.target.value)}
    placeholder=' search....'
    />
    </form>
    </div>
    
    <div className='grid_two_elem '>
    
    {InputItems.filter(user=>user.category.toLowerCase().includes(text)).map((val,ind)=>{
        
             return( 
              <Link to={`/single_page/${val.id}`}
              >
              
              <div key={val.id}>
              <div className="card mx-3 my-3" style={{width: "18rem"}}>
              <img src={val.image} className="card-img-top" alt="..."/>
              <div className="card-body">
              <h3>{val.items}</h3>
              <h4 className="card-text" style={{color:"rgb(72, 100, 191)"}}>{val.desciption}</h4>
              <h5 className='my-3' style={{color:"green",fontWeight:"bold"}}>Price:{val.rate}</h5>
                
                
              </div>
            </div>
              </div>
          </Link>

             )
    })}
    </div>
    </div>
    
    
 
    
   
    </div>
  )
}

export default Audi



