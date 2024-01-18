const connectDB = require('../../db');
const UserModel = require('../../model/hallmodel');
const bcrypt = require('bcryptjs');
const express = require('express');
const { MongoClient } = require('mongodb');
const router = express.Router();

connectDB();

const uri = 'mongodb+srv://admin:admin@cluster0.jxzhbxg.mongodb.net/';
const client = new MongoClient(uri);

router.use(express.json());

router.post('/chats', async (req, res) => {
  try {
    await client.connect();
    const { senderId, receiverId, message } = req.body;

    const chatMessage = new ChatModel({
      sender: senderId,
      receiver: receiverId,
      message: message,
      timestamp: new Date()
    });

    await chatMessage.save();
    res.status(201).json({ message: 'Message saved successfully', chatMessage });
  } catch (error) {
    console.error('Error saving chat message:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  } finally {
    await client.close();
  }
});

module.exports = router;
