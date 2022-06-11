const Team = require("../models/team");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const catchAsyncError = require("../middleware/catchAsyncError");

exports.teamProposal = catchAsyncError(async (req, res, next) => {
  
  
    const { tname, size, user, proposalLink} = req.body;
      const newTeam = new Team({
        tname: tname,
        size: size,
        user: user,
        proposalLink: proposalLink,
      });

      const savedTeam = await newTeam.save();
      res.send({
        success: true,
        message: "Team Proposal Submitted",
        savedTeam,
      });
    
  
});
