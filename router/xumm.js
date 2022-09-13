const express = require("express");
const router = express.Router();
const cors = require("cors");
const loginData = require("../controller/login");

router.get("/xumm/login", cors(), loginData.login);

module.exports = router;
