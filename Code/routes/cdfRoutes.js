const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const cdfController = require('../controller/cdfController');

router.post("/create",cdfController.create);
module.exports = router;