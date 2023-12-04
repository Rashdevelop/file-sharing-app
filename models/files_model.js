const mongoose=require("mongoose");

const file_schema=mongoose.Schema({
      file_name:{
        type:String,
        required:true
      },
      path:{
        type:String,
        required:true,
      },
     uuid:{
        type:String,
        required:true
     },
     sender:{
        type:String,
        required:false
     },
     receiver:{
        type:String,
        required:false
     },
},{timestamps:true});

module.exports=new mongoose.model("File",file_schema);