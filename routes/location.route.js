const LocRouter=require('express').Router()
const Location=require('../models/location.model')


//CREATE
LocRouter.post("/create",async(req,res)=>{
    try{
      const {location}=req.body
      
      const newloc=new Location({
        location
      })
      try{
     await newloc.save()
     return res.json({
        msg:"Location added successfully...",
        data:newloc
     })
      }catch(err){
        return res.send(err)
      }

    }catch(err){
        return res.send(err)
    }
})


//GET
LocRouter.get("/get",async (req,res)=>{
    try{
       const loc=await Location.find()
       return res.json({
        data:loc
       })
    }catch(err){
        return res.send(err)
    }
})

//GET BY ID 
LocRouter.get("/get/:id",async (req,res)=>{
    try{
       const loc=await Location.findById(req.params.id)
       return res.json({
        data:loc
       })
    }catch(err){
        return res.send(err)
    }
})


//UPDATE
LocRouter.put("/update/:id",async (req,res)=>{
    try{
        if(req.body.userId===req.params.id){
            const updatedres=await Location.findByIdAndUpdate(req.params.id,{
                $set:req.body
            },
            {new:true})
            return res.json({
                msg:"updated successfully...",
             data:updatedres
            })
        }else{
            return res.send("Location not found")
        }
       
    }catch(err){
        return res.send(err)
    }
})


//DELETE
LocRouter.delete("/delete/:id",async (req,res)=>{
    try{
     if(req.body.userId===req.params.id){
        await Location.findByIdAndDelete(req.params.id)
        return res.json({
            msg:" Location deleted successfully...."
        })
     }else{
        return res.send("invalid id!")
     }
    }catch(err){
        return res.send(err)
    }
})


module.exports=LocRouter

