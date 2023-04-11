const express=require('express');
const Connection = require('./config/db.connect');
const ResRouter = require('./routes/Restaurant.route');
const LocRouter = require('./routes/location.route');
const app=express()
require('dotenv').config()



app.use(express.json())
app.use("/restaurant",ResRouter)
app.use("/location",LocRouter)


const PORT=5050;
app.listen(PORT,async()=>{
    try{
   await Connection()
   console.log(`server is runnning in ${PORT}`)
    }catch(err){
        console.log(err)
        console.log("could not able to connect database")
    }
})