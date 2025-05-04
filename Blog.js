const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
  title: String,
  thumbnail: String,
  category: String,
  content: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Blog', BlogSchema);