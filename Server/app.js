const express=require("express")
const app=express()
const port=process.env.PORT||8005
require("./db/conn")
const CarUser=require("./model/createSchema")
app.use(express.json())
const cors = require('cors')
app.use(cors())

app.post('/register',async(req,res)=>{

    const {name,email,password,cpassword}=req.body;
    if(!name || !email || !password || !cpassword){
        return res.status(422).json({error:"Empty"})
    }
    try{
       
        if(password===cpassword){
             const User=new CarUser({
            name,
            email,
            password,
            cpassword,
        })
        const UserPost=await User.save();
        if(UserPost){
            res.status(201).json({message:"success",'data':User})
        }
            
        }else{
            res.status(500).json({error:"Password not matching"})
        }
    const ExistData=await CarUser.findOne({email:email})
    if(ExistData){
        res.status(422).json({error:"Email already Exist"})
    }else{
        res.status(201).json({message:"successful"})
    }

    }catch(e){
        console.log(e)
    }
})

// login form
app.post('/logging',async(req,res)=>{
     const {email,password}=req.body;
    try{
        const loginData=await CarUser.findOne({email:email})
        
         if(loginData.password===password){
            res.status(201).json({message:"logedin","userdata":CarUser})
            console.log(loginData)
           
         }else{
            res.status(500).json({message:"invalid"})
            
         }
    }catch(e){
        console.log(e)
    }
    
})










app.listen(port,()=>{
    console.log(`connected to port no ${port}`)
})