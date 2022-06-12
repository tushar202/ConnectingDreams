const catchAsyncError = require("../middleware/catchAsyncError");
const Dream=require('../models/dream')
const Team=require('../models/team')

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

exports.getProposal=catchAsyncError(async(req,res,next)=>{
    const proposal=await Team.find({selected:false})
    console.log(proposal)
    res.send({
        success:true,
        proposal:proposal
    })
})


exports.selectProposal=catchAsyncError(async(req,res,next)=>{
    const proposalId=req.body.proposalId
    const proposal=await Team.findOne({_id:proposalId})
    proposal.selected=true;
    await proposal.save()
    res.send({
        success:true
    })
})