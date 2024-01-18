const express = require('express');
const http = require('http');

const connectDB = require('./db');
const cors = require('cors');
const registerAPI = require('./api/user/register');
const hallApi = require('./api/user/hallFieldsData');
const halllogsApi = require('./api/user/halllogsfields');
const chatApi = require('./api/user/chats');
const bodyParser = require('body-parser');
const User = require('./model/User');
const hall =require('./model/hallmodel')
const chats =require('./model/chatscreen')
const logshall =require('./model/halllogsmodel')
const bcrypt = require('bcryptjs');
const Userupdated = require('./model/updateuser');
const app = express();
const server = http.createServer(app);

const io = require("socket.io")(server, {
  cors: {
    origin: "http://192.168.100.107:5000",
    methods: ["GET", "POST"]
  }
});



const PORT = process.env.PORT || 5000;
connectDB();
const corsOptions = {
  origin: `http:// 192.168.100.107:${PORT}`, // Replace with your client's origin
  methods: ['GET', 'POST'],
  credentials: true, // Enable credentials (cookies, authorization headers, etc.)
  optionsSuccessStatus: 204,
};
app.use(cors(corsOptions));
app.use(bodyParser.json());

app.use('/api/user', registerAPI);
app.use('/api/user', hallApi);
app.use('/api/user', halllogsApi);
app.use('/api/user', chatApi);
app.get('/api/user/halls',async (req,res)=>{
  try {

    const halls= await hall.find()
    res.json(halls)



  } catch (error) {
    console.error('Error fetching user data:', error);
    res.status(500).json({ error: 'Internal server error' });


  }
})
app.get('/api/user/chats/:receiver', async (req, res) => {
  try {
    const {  receiver } = req.params;
    console.log(receiver)

    // Assuming your chat schema has fields: sender, receiver, message, timestamp
    const messages = await chats.findOne({receiver})
    res.status(200).json(messages);
  } catch (error) {
    console.error('Error fetching chat messages:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
app.get('/api/logshalls',async (req,res)=>{
  try {

    const halls= await logshall.find()
    res.json(halls)



  } catch (error) {
    console.error('Error fetching user data:', error);
    res.status(500).json({ error: 'Internal server error' });


  }
})

app.post('/api/user/login', async (req, res) => {
  const { email, password } = req.body;



console.log(email,password)
  try {
    const user = await User.findOne({ email });
    const isPasswordValid = await bcrypt.compare(password, user.password);
    console.log('Login attempt:', { email, password });


    if (user) {
      res.status(200).json({ message: 'Login successful' });
      const isPasswordValid = await bcrypt.compare(password, user.password);
    } else {
      res.status(401).json({ message: 'Invalid email or password' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
});
app.get("/api/user", async (req, res) => {
	try {
     // Replace with your actual collection name

    const user = await User.find();
    res.json(user);
  } catch (error) {
    console.error('Error fetching user data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get("/api/user/:email", async (req, res) => {
  const { email } = req.params;
  console.log(email)
	try {
     // Replace with your actual collection name

    const user = await User.findOne({email});
    res.json(user)

  } catch (error) {
    console.error('Error fetching user data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
app.get("/api/halls/:email", async (req, res) => {
  const { email } = req.params;
  console.log(email)
	try {
     // Replace with your actual collection name

    const user = await hall.findOne({email});
    res.json(user)

  } catch (error) {
    console.error('Error fetching user data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
app.get("/api/halls", async (req, res) => {
  const { id } = req.query;
  console.log(id)
	try {
     // Replace with your actual collection name

    const user = await hall.findOne({_id:id});
    res.json(user)

  } catch (error) {
    console.error('Error fetching user data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.put("/api/user",async (req, res) => {


  const { id } = req.query;
  const { fullname,email} = req.body;
  console.log(id,fullname,email)



  try {
    const user = await Userupdated.findByIdAndUpdate(
      {_id:id},
      {fullname:fullname,email:email, },
      { new: true }
    );

    if (!user) {
      return res.status(404).json({ success: false, error: 'User not found' });
    }

    res.status(200).json({ success: true, data: user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Server error' });
  }
});
app.put("/api/user/halls",async (req, res) => {


  const { id } = req.query;
  const { email,hallname,halllocation,halldescription,hallprice} = req.body;
  console.log(id,email, hallname,halllocation,halldescription,hallprice)



  try {
    const user = await Userupdated.findByIdAndUpdate(
      {_id:id},
      {email:email, hallname:hallname,halllocation:halllocation,halldescription:halldescription,hallprice:hallprice  },
      { new: true }
    );

    if (!user) {
      return res.status(404).json({ success: false, error: 'User not found' });
    }

    res.status(200).json({ success: true, data: user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Server error' });
  }
});


io.on('connection', (socket) => {
  console.log('User connected:', socket.id);

  socket.on('message', (data) => {
    // Broadcast the message to all connected clients
    io.emit('message', data);
    console.log(data)
  });
  socket.on('privateMessage', async ({ recipientId, senderId, message }) => {
    // Save to MongoDB
    try {
      const chatMessage = new chats({
        sender: senderId,
        receiver: recipientId,
        message: message,
        timestamp: new Date()
      });
      await chatMessage.save();
      io.to(recipientId).emit('privateMessage', { senderId, message });
    } catch (error) {
      console.error('Error saving chat message:', error);
    }
  });
  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });
});


server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
