const jwt = require("jsonwebtoken");
const User=require('../models/user')
const auth = async (req, res, next) => {
    try {
      const token = req.header("x-auth-token");
      if (!token) {
        return res.status(500).send({
          message: "User not Authorized!",
        });
      }
      const verified = await jwt.verify(token, process.env.JWT_SECRET);
      if (!verified) {
        return res.status(500).send({
          message: "User Authorization Failed!",
        });
      }
      const user=await User.findOne({_id:verified.id})
      req.user = user;
      next();
    } catch (err) {
      return res.status(500).json({
        message: err.message,
      });
    }
  };

  module.exports = auth;