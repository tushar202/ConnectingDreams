const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const teamController = require("../controller/teamController")
const { storage } = require("../utils/CloudinaryUtils");
const multer=require('multer')
const upload = multer({ storage });
const cloudinary = require('cloudinary');

router.get("/allTeams",teamController.view);
router.post("/teamProposal",auth, upload.array("proposalLink"), teamController.teamProposal);
router.get("/:id",teamController.findOne);

module.exports = router;