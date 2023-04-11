const mongoose=require('mongoose')

const ResSchema=new mongoose.Schema({
    name:{type:String,require:true},
    desc:{type:String,require:true},
    rating:{type:String,require:true},
    location:{type:String,require:Array,default:""}
},{
    timestamps:true
})

const Restaurant=mongoose.model("Restaurant",ResSchema)

module.exports=Restaurant