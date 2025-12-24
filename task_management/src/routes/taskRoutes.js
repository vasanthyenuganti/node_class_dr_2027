const express = require("express");
const taskCtrl = require("../controllers/taskController");
const route = express.Router();


route.post("/add", taskCtrl.addTask);


module.exports = route;
