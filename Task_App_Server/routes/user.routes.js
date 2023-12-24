const express = require("express");
const UserController = require("../controllers/user.controller");

const Router = express.Router();

Router.post("/register", UserController.createUser);
Router.post("/login", UserController.login);

module.exports = Router;
