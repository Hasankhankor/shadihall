const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  hallname:{type:String,required:true},
  hallpicture:{type:String},
  halllocation:{type:String},
  halldescription:{type:String},
  hallprice:{type:String}

});

const UserModel = mongoose.model('hallsData', userSchema);

module.exports = UserModel;
