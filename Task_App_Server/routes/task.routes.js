const express = require("express");
const TaskController = require("../controllers/task.controller");

const Router = express.Router();

Router.post("/taskByUser", TaskController.getTasksByUser);
Router.post("/insertTask", TaskController.insertTask);
Router.post("/deleteTask", TaskController.deleteTask);

module.exports = Router;
