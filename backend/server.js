const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const connectDB = require('./db');
const cors = require('cors');
const registerAPI = require('./api/user/register');
const bodyParser = require('body-parser');
const User = require('./model/User');
const bcrypt = require('bcryptjs');

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

io.on('connection', (socket) => {
  console.log('User connected:', socket.id);

  socket.on('message', (data) => {
    io.emit('message', data);
  });

  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });
});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
