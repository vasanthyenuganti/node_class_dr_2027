const userCtrl = require("../controllers/userController");
const express = require("express");

const route = express.Router()

route.get("/roll/:roll",userCtrl.getUserByRoll);

module.exports = route;