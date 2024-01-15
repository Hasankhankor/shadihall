const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  id: { type: String,  unique: true },

  hallname:{type:String},

  halllocation:{type:String},
  halldescription:{type:String},
  hallprice:{type:String}

});

const UserModel = mongoose.model('halllogs', userSchema);

module.exports = UserModel;
