const mongoose=require("mongoose");
require("dotenv").config();
function connectDB(){
    mongoose.connect(process.env.DB_URI,{
        dbName:"file-sharing"
    })
    .then(console.log("db connected"))
    .catch((err)=>{
        console.log(err);
    })

}
module.exports=connectDB;