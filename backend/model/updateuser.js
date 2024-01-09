const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  fullname: String,
  email: String,
  profilepicture:String,

  // Other fields if any
});

const User = mongoose.model('user', userSchema);

module.exports = User;