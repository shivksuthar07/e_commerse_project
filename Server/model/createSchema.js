const mongoose=require('mongoose')
const CarSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    cpassword:{
        type:String,
        required:true,
    }
})
const CarUser=new mongoose.model("CarUser",CarSchema)
module.exports=CarUser;