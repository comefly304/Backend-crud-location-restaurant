const ResRouter=require('express').Router()
const Restaurant=require('../models/res.model')


//CREATE
ResRouter.post("/create",async(req,res)=>{
    try{
      const {name,desc,rating,location}=req.body
      
      const newres=new Restaurant({
        name,
        desc,
        rating,
        location
      })
      try{
     await newres.save()
     return res.json({
        msg:"restaurant added successfully...",
        data:newres
     })
      }catch(err){
        return res.send(err)
      }

    }catch(err){
        return res.send(err)
    }
})


//GET
ResRouter.get("/get",async (req,res)=>{
    try{
       const rest=await Restaurant.find()
       return res.json({
        data:rest
       })
    }catch(err){
        return res.send(err)
    }
})

//GET BY ID 
ResRouter.get("/get/:id",async (req,res)=>{
    try{
       const rest=await Restaurant.findById(req.params.id)
       return res.json({
        data:rest
       })
    }catch(err){
        return res.send(err)
    }
})


//UPDATE
ResRouter.put("/update/:id",async (req,res)=>{
    try{
        if(req.body.userId===req.params.id){
            const updatedres=await Restaurant.findByIdAndUpdate(req.params.id,{
                $set:req.body
            },
            {new:true})
            return res.json({
                msg:"updated successfully...",
             data:updatedres
            })
        }else{
            return res.send("restaurant not found")
        }
       
    }catch(err){
        return res.send(err)
    }
})


//DELETE
ResRouter.delete("/delete/:id",async (req,res)=>{
    try{
     if(req.body.userId===req.params.id){
        await Restaurant.findByIdAndDelete(req.params.id)
        return res.json({
            msg:" restaurant deleted successfully...."
        })
     }else{
        return res.send("invalid id!")
     }
    }catch(err){
        return res.send(err)
    }
})


module.exports=ResRouter

