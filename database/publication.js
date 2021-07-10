const mongoose=require("mongoose");

const pubSchema=mongoose.Schema({
    Id:Number,
    name: String,
    books:[String]
   
})

const pubModel=mongoose.model("publication",pubSchema)

module.exports=pubModel;
