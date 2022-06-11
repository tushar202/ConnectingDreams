const express=require('express')
const router=express.Router()
const {auth}=require("../middleware/auth");
const sioController=require("../controller/sioController")


router.post('/uploadDream',auth,sioController.uploadDream)

module.exports = router;