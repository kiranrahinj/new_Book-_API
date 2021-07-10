const mongoose=require("mongoose");

const bookSchema=mongoose.Schema({
    ISBN: String,
    title:String,
    pub_date: String,
    language:String,
    noPage: Number,
    author:[Number],
    publication:[Number],
    category:[String]
   
})

const bookModel=mongoose.model("books",bookSchema);

module.exports=bookModel;
