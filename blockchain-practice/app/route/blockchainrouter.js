const express = require("express");
const bcController = require("../controller/blockchaincontroller");

const router = express.Router();

router.get("/block", bcController.getBlocks);


module.exports=router;