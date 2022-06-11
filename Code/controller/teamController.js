const Team = require("../models/team");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const catchAsyncError = require("../middleware/catchAsyncError");
const multer = require("multer");
const { storage } = require("../utils/CloudinaryUtils");
const upload = multer({ storage });
const cloudinary = require('cloudinary');

exports.teamProposal = catchAsyncError(async (req, res, next) => {
  
  
    const { tname, size, user} = req.body;
    const proposalLink=req.files.map((f) => ({ proposalLink: f.path,fileName: f.filename}));
      const newTeam = new Team({
        tname: tname,
        size: size,
        user: user,
        proposalLink:proposalLink,
      });

      const savedTeam = await newTeam.save();
      res.send({
        success: true,
        message: "Team Proposal Submitted",
        savedTeam,
      });
    
  
});
