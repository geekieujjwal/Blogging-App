const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const authRouter = require("./routes/authRoutes");
const blogRouter = require("./routes/blogRoutes");

// API routes
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/blog", blogRouter);

app.use("/", (req, res) => {
  res.status(201).json("Hi your api is working.");
});

module.exports = app;
