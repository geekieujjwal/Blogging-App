const express = require("express");
const blogController = require("../controllers/blogController");
const router = express.Router();

router.route("/").get(blogController.getAllBlogPosts);
//create a new blog

router.route("/").post(blogController.createNewBlog);

// router.route("/login").post(authController.loginExistingUser);

module.exports = router;

//I have to defind routes here e.g. / all routes fetched
// on filter change the query params
