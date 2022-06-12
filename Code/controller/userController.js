const User = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const catchAsyncError = require("../middleware/catchAsyncError");
const mongoose = require('mongoose');

exports.signup = catchAsyncError(async (req, res, next) => {
  if (!req.body.fname) {
    res.send({
      success: false,
      message: "FirstName is required!",
    });
  } else {
    const { fname, lname, username, email, password } = req.body;
    const takenUsername = await User.findOne({ username });
    const takenEmail = await User.findOne({ email });

    if (takenUsername || takenEmail) {
      return res.send({
        success: false,
        message: "Username or email has already been taken",
      });
    } else {
      let hashedPassword = await bcrypt.hash(password, 10);

      const newUser = new User({
        fname: fname,
        lname: lname,
        username: username,
        email: email,
        password: hashedPassword,
      });
      const savedUser = await newUser.save();
      res.send({
        success: true,
        message: "User Registered Successfully!",
        savedUser,
      });
    }
  }
});

exports.login = catchAsyncError(async (req, res, next) => {
  const { email, password } = req.body;
  console.log(125)
  User.findOne({ email }).then((dbUser) => {
    if (!dbUser) {
      return res.send({
        success: false,
        message: "Invalid Username or Password!",
      });
    }
    bcrypt.compare(password, dbUser.password).then((result) => {
      if (result) {
        const payload = {
          id: dbUser._id,
          username: dbUser.username,
        };
        jwt.sign(
          payload,
          process.env.JWT_SECRET,
          {
            expiresIn: 86400,
          },
          (err, token) => {
            if (err) {
              return res.send({
                success: false,
                message: "error!",
              });
            }
            return res.send({
              success: true,
              message: "User Logged In Successfully!",
              token: token,
              user: dbUser,
            });
          }
        );
      } else {
        return res.send({
          success: false,
          message: "Invalid Username or Password!",
        });
      }
    });
  });
});

exports.verifyToken = catchAsyncError(async (req, res, next) => {
  const token = req.header("x-auth-token");
  if (!token) {
    return res.status(500).send({
      message: "User not Authentic!",
    });
  }
  const verified = jwt.verify(token, process.env.JWT_SECRET);
  if (!verified) {
    return res.status(500).send({
      message: "User Authentication failed!",
      isValid: false,
    });
  }
  const userData = await User.findById(verified.id);
  res.send({
    message: true,
    username: userData["username"],
  });
});

exports.currentUser = catchAsyncError(async (req, res, next) => {
  const userData = await User.findById(req.user).select("-password");
  res.send({
    isLoggedIn: true,
    user: userData,
  });
});

exports.logout = catchAsyncError(async (req, res, next) => {
  const token = req.header("x-auth-token");
  const result = jwt.verify(token, process.env.JWT_SECRET);
  if (result) {
    return res.send({
      success: true,
      message: "User Logged Out Successfully!",
    });
  }
});

exports.changeRoles = catchAsyncError(async (req,res,next) => {
  const user_id = req.body.user_id;
  const role = req.body.role;

  // Check if valid mongoose id 
  if(!mongoose.Types.ObjectId.isValid(user_id)){
    return res.status(404).send('No User available with that ID');
  }
  else{
    const updated_User = await User.findByIdAndUpdate(user_id,{role:role});
    if (updated_User) {
      return res.send({
        success: true,
        message: "Updates successfully",
      });
    }
  }

});