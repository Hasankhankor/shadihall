const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  fullname:{type:String,required:true},
  profilepicture:{type:String}

});

const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;
