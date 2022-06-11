const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const teamController=require("../controller/teamController")



router.post("/teamProposal",teamController.teamProposal);
router.get("/allTeams",teamController.view);



module.exports = router;