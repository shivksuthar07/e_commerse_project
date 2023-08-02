const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/Carpharma_api')
.then(()=>{
    console.log("database connected")
})
.catch((e)=>{
    console.log("database failed to connect")
})