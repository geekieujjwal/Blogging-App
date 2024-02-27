const User = require("../Models/User");

//Registering a new User
exports.registerNewUser = async (req, res) => {
  try {
    const user = new User(req.body);
    const result = await user.save();
    res.status(201).json({
      success: true,
      message: "User registered successfully",
      user: result,
    });
  } catch (error) {
    console.error("Error registering new user:", error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

//Login an existing user
exports.loginExistingUser = async (req, res) => {
  try {
    // Check if email and password are provided in the request body
    if (req.body.email && req.body.password) {
      // Find the user by email
      const user = await User.findOne({ email: req.body.email }).select(
        "+password"
      );
      // If user is found, compare passwords
      if (user) {
        // Compare hashed password with provided password
        const passwordMatch = req.body.password === user.password;

        if (passwordMatch) {
          // Passwords match, send user data
          res.send(user);
        } else {
          // Passwords don't match
          console.log("Incorrect password");
          res.status(401).send("Incorrect password");
        }
      } else {
        // No user found with provided email
        console.log("No user found");
        res.status(404).send("No user found");
      }
    } else {
      // Email or password not provided in the request body
      console.log("Email or password not provided");
      res.status(400).send("Email or password not provided");
    }
  } catch (error) {
    // Log and handle errors
    console.error("Error during login:", error);
    res.status(500).send("Internal Server Error");
  }
};
