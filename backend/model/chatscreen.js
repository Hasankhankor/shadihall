const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema({
  sender: { type:String},
  receiver: { type:String },
  message: String,
  timestamp: Date
});

module.exports = mongoose.model('Chat', chatSchema);