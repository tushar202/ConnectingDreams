const express = require("express");
const router = express.Router();
const {auth,authorizeRole} = require("../middleware/auth");
const cdfController = require('../controller/cdfController');
const multer = require('multer')
const { storage } = require("../utils/CloudinaryUtils"); 
const upload = multer({ storage });
const cloudinary = require('cloudinary');

router.get("/view",cdfController.getAll);
router.post("/create",auth,upload.array("pdf_link"), cdfController.create);
router.get("/getUnverifiedDreams",cdfController.getUnverifiedDreams)
router.post("/verifyDream",auth,cdfController.verifyDream)
router.post('/assignRole',auth,cdfController.assignRole)
router.get("/:id",cdfController.findOne);


module.exports = router;