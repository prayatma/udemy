const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
  title: { type: String, required: true }, // node js javacript in general uppercase String
  content: { type: String, require: true},
  imagePath: { type: String, require: true }
});

module.exports = mongoose.model('Post', postSchema);
