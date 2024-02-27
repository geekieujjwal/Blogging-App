const mongoose = require("mongoose");

const blogPostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please enter a title"],
    },
    subtitle: {
      type: String,
      default: "",
    },
    content: {
      type: String,
      required: [true, "Please enter content"],
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "Please provide an author"],
    },
    likes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    comments: [
      {
        content: {
          type: String,
          required: false,
        },
        author: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
          required: false,
        },
        datePosted: {
          type: Date,
          default: Date.now,
        },
      },
    ],
    tags: {
      type: [String],
      validate: {
        validator: function (tags) {
          return tags.length <= 5; // Limit tags to 5
        },
        message: "A maximum of 5 tags are allowed",
      },
    },
    readingTime: {
      type: String,
      required: [true, "Please provide a reading time"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("BlogPost", blogPostSchema);
