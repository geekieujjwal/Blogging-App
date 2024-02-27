const mongoose = require("mongoose");
// const express = require("express");
const dotenv = require("dotenv");
// const User = require("./Models/User");

dotenv.config({});

const app = require("./app");

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => console.log("Error connecting to mongodb", err));

//Start the server
app.listen(3000, () => {
  console.log(`Server is running on port 3000`);
});
