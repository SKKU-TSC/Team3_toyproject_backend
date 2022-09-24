const mongoose = require('mongoose');
// schema
const commentSchema = mongoose.Schema({
  // 1
  post: { type: mongoose.Schema.Types.ObjectId, required: true },
  body: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }, // 2
  updatedAt: { type: Date },
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;
