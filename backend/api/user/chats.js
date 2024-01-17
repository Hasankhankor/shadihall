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

    const { userid,data} = req.body;
    console.log('Received request with data:', {userid,data});
    // Check if user already exists


    // Hash the password



    const newUser = new UserModel({
     userid:userid,
     data:data

    });

    // Save the new user
  // Save the new user



    // Insert the new user into the 'User' collection
    const collection = client.db().collection('chats');
    const result = await collection.insertOne({
        userid:userid,
        data:data



    });

    res.status(201).json({ message: 'User registered successfully', user: result});
  } catch (error) {
    console.error('Error during user registration:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  } finally {
    if (client) {
      await client.close();
    }
  }
});

module.exports = router;
