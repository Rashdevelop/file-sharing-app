const express=require("express");
const dotenv=require("dotenv").config();

//db-------------------------
const connectDB = require("./config/db");
connectDB();

//middleware------------
const app=express();
app.use("/api/files",require("./routes/files_routes"));


//-------------server------------
const port=process.env.PORT || 3000;
app.listen(port,()=>{
   console.log(`sever connected on port : ${port}`);
 })