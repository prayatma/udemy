const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
  title: { type: String, required: true }, // node js javacript in general uppercase String
  content: { type: String, required: true},
  imagePath: { type: String, required: true },
  creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User' , required: true }
});

module.exports = mongoose.model('Post', postSchema);
