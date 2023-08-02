import React, { useState } from 'react'
import Singledata from "./Singledata"
import InputItems from './carsinput/InputItems'
import { Link } from 'react-router-dom'

const Single_page = () => {

 
  
    const[insert,setInsert]=useState(Singledata[0])
  return (
    <div className='container'>
    <div className='row'>
    <div className='col-2'>
    {Singledata.map((curElem)=>{
        return(
            
            <div className="card mx-3 my-3" style={{width: "10rem"}}>
            <img src={curElem.img} className="card-img-top " alt="..."
            onClick={()=>setInsert(curElem)}
            />
            
            </div>
        )
    })}
    </div>
    <div className='col-4 d-flex align-items-center'>
    
    <img src={insert.img} style={{width:"22rem"}}/>
    </div>
    <div className='col-6 ml-5 mt-5'>
    <h2 className='my-3'>{Singledata[0].name}</h2>

    <p >{Singledata[0].name}</p>
   
   <h5 style={{color:"green"}}>{InputItems[0].rate}</h5>
   <button className='btn btn-primary mx-2 my-2'>Buy</button>
   <Link to='/cart'>
   <button type='submit'  className='btn btn-warning mx-2 my-2'>Add Cart</button>
   </Link>
    </div>
    </div>
      
    </div>
  )
}

export default Single_page
