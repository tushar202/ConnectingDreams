const catchAsyncError = require("../middleware/catchAsyncError");
const Dream=require('../models/dream')


exports.uploadDream=catchAsyncError(async(req,res,next)=>{
    const name=req.body.name
    const user=req.user._id
    const titleOfDream=req.body.titleOfDream
    const drive=req.body.link;
    const contact=req.body.contact

    const newDream=new Dream({
        name:name,
        user:user,
        titleOfDream:titleOfDream,
        drive:drive,
        contact:contact
    })
    
    const result=await newDream.save()
    res.status(201).send({
        message:'submitted successfuly'
    })
})