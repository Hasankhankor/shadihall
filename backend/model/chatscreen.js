const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

  userid:{type:String,},
  data:{type:String}

});

const UserModel = mongoose.model('chats', userSchema);

module.exports = UserModel;
