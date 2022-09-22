const express = require("express");
const routes = express.Router();
const authController = require("../controllers/authController");

const loginValidation = require("../validations/auth/login");

//Login
routes.post("/login", loginValidation, authController.login);

module.exports = routes;
