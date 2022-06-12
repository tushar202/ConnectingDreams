const CDF = require("../models/cdf");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const catchAsyncError = require("../middleware/catchAsyncError");
const multer = require("multer");
const { storage } = require("../utils/CloudinaryUtils");
const upload = multer({ storage });
const cloudinary = require('cloudinary');
const Dream=require('../models/dream')
const User=require('../models/user')


exports.create = catchAsyncError(async (req, res, next) => {
        const { title,
            application_start_date,
            application_end_date,
            selection_process_result,
            implementation_start,
            implementation_end,
            instructions,
            tags,
            location,
            dream_id,
            sio_id
        } = req.body;
        const pdf_link = req.files.map((f) => ({ proposalLink: f.path, fileName: f.filename }));
        const newCDF = new CDF({
            title: title,
            pdf_link: pdf_link,
            application_start_date: application_start_date,
            application_end_date: application_end_date,
            selection_process_result: selection_process_result,
            implementation_start: implementation_start,
            implementation_end: implementation_end,
            instructions: instructions,
            tags: tags,
            location: location,
            dream_id:dream_id,
            sio_id:sio_id
        });
        const saved_CDF = await newCDF.save();
        res.send({
            success: true,
            message: "Case Study added successfully!",
            saved_CDF,
        });
});

exports.getAll = catchAsyncError(async (req,res,next) => {
    const allCaseStudy = await CDF.find();
    res.status(200).json(allCaseStudy);
});

exports.findOne = catchAsyncError(async (req,res,next) => {
    const id = req.params.id;
    const oneCDF = await CDF.findById(id);
    res.status(200).json(oneCDF);
})

exports.getUnverifiedDreams=catchAsyncError(async(req,res,next)=>{
    const result=await Dream.find({verified:false});
    console.log(result)
    res.status(200).send({
        success:true,
        dreams:result
       
    })
})

exports.verifyDream=catchAsyncError(async (req,res,next)=>{
    console.log(req.body)
    const dreamId=req.body.id
    const dream=await Dream.findOne({_id:dreamId})
    dream.verified=true;
    await dream.save()
    res.status(200).send({
        success:true,
    })
})

exports.assignRole=catchAsyncError(async(req,res,next)=>{
    const id=req.body.id;
    const role=req.body.role;
    const user=await User.findOne({_id:id})
    user.role=role
    await user.save()
    res.status(200).send({
        success:true
    })
})

