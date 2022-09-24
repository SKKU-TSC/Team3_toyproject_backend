const mongoose = require('mongoose');

// schema
const postSchema = mongoose.Schema({
  // 1
  title: { type: String, required: true },
  body: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }, // 2
  updatedAt: { type: Date },
});

// model & export
const Post = mongoose.model('post', postSchema);
module.exports = Post;
