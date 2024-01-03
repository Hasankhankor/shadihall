const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  hallname:{type:String,required:true},
  halllocation:{type:String,required:true},
  hallprice:{type:String,required:true},
  hallpicture:{type:String}

});

const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;
