const mongoose=require('mongoose')
mongoose.connect('mongodb+srv://ss7618796:OslpyeEHUWbNrS8Z@cluster0.hxcr8ji.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/Vdoit_BlogApplication').then(()=>{
//mongoose.connect('mongodb://localhost:27017/Vdoit_BlogApplication').then(()=>{
    console.log('Database connected Successfully')
})
.catch((error)=>{
    console.log('Connection Failed')
})
