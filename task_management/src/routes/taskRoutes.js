const express = require("express");
const taskCtrl = require("../controllers/taskController");
const route = express.Router();


route.post("/add", taskCtrl.addTask);
route.get("/get-all-tasks", taskCtrl.getAllTasks);


module.exports = route;
