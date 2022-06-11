const CDF = require("../models/cdf");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const catchAsyncError = require("../middleware/catchAsyncError");

exports.create = catchAsyncError(async (req,res,next) => {
    if(!req.body.title) {
        res.send({
            success: false,
            message: "Title of the Case Study is required",
          });
    }
    else if(!req.body.pdf_link) {
        res.send({
            success: false,
            message: "Please attach a document"
        });
    }
    else if(!req.body.application_start_date){
        res.send({
            success: false,
            message: "Please provide an application start date"
        });
    }
    else {
        const {title,
            pdf_link,
            application_start_date,
            application_end_date,
            selection_process_result,
            implementation_start,
            implementation_end,
            instructions,
            tags,
            location
        } = req.body;

        const newCDF = new CDF({
            title: title,
            pdf_link : pdf_link,
            application_start_date: application_start_date,
            application_end_date: application_end_date,
            selection_process_result: selection_process_result,
            implementation_start: implementation_start,
            implementation_end: implementation_end,
            instructions: instructions,
            tags: tags,
            location: location,
        });
        const saved_CDF = await newCDF.save();
        res.send({
            success: true,
            message: "Case Study added successfully!",
            saved_CDF,
        });
    }
});

exports.getAll = catchAsyncError(async (req,res,next) => {
    const allCaseStudy = await CDF.find();
    res.status(200).json(allCaseStudy);
});