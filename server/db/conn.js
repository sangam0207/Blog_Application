const mongoose=require('mongoose')
mongoose.connect('mongodb://localhost:27017/Vdoit_BlogApplication')
.then(()=>{
    console.log('Database connected Successfully')
})
.catch((error)=>{
    console.log('Connection Failed')
})