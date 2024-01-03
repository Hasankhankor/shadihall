const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const connectDB = require('./db');
const cors = require('cors');
const registerAPI = require('./api/user/register');
const bodyParser = require('body-parser');
const User = require('./model/User');
const bcrypt = require('bcryptjs');
const { getUserByEmail } = require("./api/user/userServices");

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

const PORT = process.env.PORT || 5000;
connectDB();

app.use(cors());
app.use(bodyParser.json());

app.use('/api/user', registerAPI);

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


io.on('connection', (socket) => {
  console.log('User connected:', socket.id);

   socket.on("chat message", (message) => {
			io.emit("chat message", message); // Broadcast the message to all connected clients
		});
  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });
});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
