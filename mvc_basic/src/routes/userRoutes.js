const express = require("express");
const userCtrl = require("../controllers/userController");
const route = express.Router();

route.post("/add", userCtrl.addUser);
route.get("/roll/:roll",userCtrl.getUserByRoll);


module.exports = route;