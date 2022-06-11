const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const cdfController = require('../controller/cdfController');
const multer = require('multer')
const { storage } = require("../utils/CloudinaryUtils"); 
const upload = multer({ storage });
const cloudinary = require('cloudinary');




router.post("/create",auth,upload.array("pdf_link"), cdfController.create);
module.exports = router;