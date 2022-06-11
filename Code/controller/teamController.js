const Team = require("../models/team");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const catchAsyncError = require("../middleware/catchAsyncError");
const multer = require("multer");
const { storage } = require("../utils/CloudinaryUtils");
const upload = multer({ storage });
const cloudinary = require('cloudinary');

exports.teamProposal = catchAsyncError(async (req, res, next) => {
    const { tname, size, cdf_id} = req.body;
    const proposalLink=req.files.map((f) => ({ proposalLink: f.path,fileName: f.filename}));
      const newTeam = new Team({
        tname: tname,
        size: size,
        user: req.user._id,
        cdf_id: cdf_id,
        proposalLink:proposalLink,
      });

      const savedTeam = await newTeam.save();
      res.send({
        success: true,
        message: "Team Proposal Submitted",
        savedTeam,
      });
});

exports.view = catchAsyncError(async (req, res, next) => {
  const cdf_id = req.body.cdf_id;
  const allTeams = await Team.find({cdf_id:cdf_id});
  res.status(200).json(allTeams);
})

exports.findOne = catchAsyncError(async (req,res,next) => {
  const id = req.params.id;
  const oneTeam = await Team.findById(id);
  res.status(200).json(oneTeam);
})