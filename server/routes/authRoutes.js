const express = require("express");
const authController = require("../controllers/authController");
const router = express.Router();

//create a new user
router.route("/register").post(authController.registerNewUser);

//login an existing user
router.route("/login").post(authController.loginExistingUser);

module.exports = router;
