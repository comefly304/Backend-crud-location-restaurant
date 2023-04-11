const mongoose=require('mongoose')

const LocationSchema=new mongoose.Schema({
   location:{
    type:{type:String,require:true},
    coordinates:{type:Array,require:true}
   }
},{
    timestamps:true
})

const Location=mongoose.model("Location",LocationSchema)

module.exports=Location