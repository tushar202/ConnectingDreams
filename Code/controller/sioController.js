const catchAsyncError = require("../middleware/catchAsyncError");
const Dream=require('../models/dream')


exports.uploadDream=catchAsyncError(async(req,res,next)=>{
    // console.log(req.user)
    const name=req.body.name
    const user=req.user._id
    const titleOfDream=req.body.titleOfDream
    const drive=req.file;
    const contact=req.body.contact

    console.log(req.body)
    const newDream=new Dream({
        name:name,
        user:user,
        titleOfDream:titleOfDream,
        drive:drive,
        contact:contact
    })
    
    console.log(newDream)
    const result=await newDream.save()
    res.status(201).send({
        message:'submitted successfuly'
    })
})