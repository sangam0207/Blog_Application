const mongoose=require('mongoose')
mongoose.connect('mongodb+srv://sangamequ:oKmv7v8Lj8Jko0im@blogtask.egjva4d.mongodb.net/Vdoit_BlogApplication')
.then(()=>{
    console.log('Database connected Successfully')
})
.catch((error)=>{
    console.log('Connection Failed')
})