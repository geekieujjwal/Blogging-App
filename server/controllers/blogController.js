const BlogPost = require("../Models/Blog");

//Get all blog posts
exports.getAllBlogPosts = async (req, res) => {
  try {
    const blogPosts = await BlogPost.find();
    res.json(blogPosts);
    console.log(blogPosts);
  } catch (error) {
    console.log("Error fetching blog posts", error);
    res
      .status(500)
      .json({ error: "An error occurred while fetching blog posts" });
  }
};

// Creating a new blog post
exports.createNewBlog = async (req, res) => {
  try {
    const { title, subtitle, content, author, tags, readingTime } = req.body;
    const newBlogPost = new BlogPost({
      title,
      subtitle,
      content,
      author,
      tags,
      readingTime,
    }); // Here, change BlogPost to BlogPost model constructor
    const result = await newBlogPost.save();
    console.log("This is result", result);
    res.status(201).json({
      message: "Blog post created successfully",
      blogPost: newBlogPost,
    });
  } catch (error) {
    console.log("Error creating blog post:", error); // Log the error for debugging
    res
      .status(500)
      .json({ error: "An error occurred while creating the blog post" });
  }
};
