const express=require("express");
const multer=require("multer");
const File=require("../models/files_model");
const router=express.Router();

const storage = multer.diskStorage({
    destination:(req, file, cb)=>{
      cb(null, 'uploads/')
    },
    filename: (req, file, cb)=>{
      const uniqueName = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, uniqueName);
    }
  })
  
    let upload = multer({ storage}).single('myfile');
    router.post("/",(req,res)=>{
      if(!req.file){
       return res.json({error:'All fields are mandatory'});
      }
      upload(req,res,(err)=>{
        if(err){
            return res.status(500).send({error:err.message})
        }
        const File=new File({
           filename:req.file.filename,
           uuid:uuid4(),
           path:req.file.path,
           
        })
      })
})
 module.exports=router;