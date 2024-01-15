

"use client"
import React, { useState, useEffect } from 'react';


import io from 'socket.io-client';

import Navbar from "../../Components/navbarSection/navbar";

// import { initializeApp } from 'firebase/app';
// import { getAnalytics } from "firebase/analytics";
import { MenuIcon } from "@heroicons/react/outline"
import { Spacer } from "@nextui-org/spacer";


const socket = io("http://192.168.18.125:5000", { transports: ['websocket'] });

const adminUsername = 'Hasan';
function App() {
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState('');
    const [chatInfo, setChatInfo] = useState({ adminPhoto: '', adminUsername: '' }); // Initialize chatInfo with default values

    useEffect(() => {

      socket.on('message', (data) => {
        console.log('Received message:', data);
        setMessages((prevMessages) => [...prevMessages, data]);
      });


      socket.on('connect', () => {
        console.log('Socket connected:', socket.connected);
      });


      return () => {
        socket.disconnect();
      };
    }, []);



    // const firebaseConfig = {
    //   apiKey: "AIzaSyBdCaQVxKURSJxhX3FjLI-eHRoSas-E6JE",
    //   authDomain: "chat-message-2dfbe.firebaseapp.com",
    //   projectId: "chat-message-2dfbe",
    //   storageBucket: "chat-message-2dfbe.appspot.com",
    //   messagingSenderId: "1008529597160",
    //   appId: "1:1008529597160:web:5f2274371c6dd90bd71f5d",
    //   measurementId: "G-HF0MY84LN7"
    // };
//     const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const sendMessage = () => {
  if (messageInput.trim() !== '') {

    console.log('Socket connected:', socket.connected);


    console.log('Sending message:', { text: messageInput });
    socket.emit('message', { text: messageInput });


    setMessageInput('');
  }
};


  return (
    <>
     <div>
      <Navbar />
      <Spacer y={10} />
      <div style={{ display: 'flex', maxWidth: '800px', margin: 'auto' }}>
  <div style={{ width: '20%', borderRight: '1px solid #ccc', padding: '20px' }}>
    <h2 style={{ fontSize: '20px' }}>Users</h2>
    <ul style={{ listStyle: 'none', padding: 0 }}>
      <li style={{ marginBottom: '15px', display: 'flex', alignItems: 'center', fontSize: '18px' }}>
        <a href="/user1-profile">
          <img src="user1-avatar.jpg" alt="User 1" style={{ width: '40px', height: '40px', borderRadius: '50%', marginRight: '15px' }} />
          User 1
        </a>
      </li>
      <li style={{ marginBottom: '15px', display: 'flex', alignItems: 'center', fontSize: '18px' }}>
        <a href="/user2-profile">
          <img src="user2-avatar.jpg" alt="User 2" style={{ width: '40px', height: '40px', borderRadius: '50%', marginRight: '15px' }} />
          User 2
        </a>
      </li>
      <li style={{ marginBottom: '15px', display: 'flex', alignItems: 'center', fontSize: '18px' }}>
        <a href="/user3-profile">
          <img src="user3-avatar.jpg" alt="User 3" style={{ width: '40px', height: '40px', borderRadius: '50%', marginRight: '15px' }} />
          User 3
        </a>
      </li>
    </ul>
  </div>
</div>


      <div style={{ maxWidth: '800px', margin: 'auto' }}>

        <div style={{ padding: '20px', borderBottom: '1px solid #ccc' }}>

          <img src={"xX.png"} alt="User Photo" style={{ width: '40px', height: '40px', borderRadius: '50%', marginRight: '10px' }} />
          <h1>{chatInfo.adminUsername}</h1>

          <div>
            {messages.map((message, index) => (
              <div
                key={index}
                style={{
                  marginBottom: '10px',
                  padding: '10px',
                  borderRadius: '10px',
                  background: message.sender ? '#003B95' : '#ebecec', // Blue for user's sent messages, Grey for replies
                  color: message.sender ? 'white' : 'black',
                }}
              >

                {/* {message.sender && (
                  <>
                    <img src={message.sender.photo} alt="User Photo" style={{ width: '30px', height: '30px', borderRadius: '50%', marginRight: '10px' }} />
                    <span>{message.sender.username}:</span>
                  </>
                )} */}
                <p>{message.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div style={{ padding: '20px', borderTop: '1px solid #ccc', margin: '0 auto', marginLeft: '90px' }}>
          <input
            type="text"
            placeholder="Type your message..."
            value={messageInput}
            onChange={(e) => setMessageInput(e.target.value)}
            style={{ width: '70%', padding: '10px', marginRight: '20px' }}
          />
          <button
            onClick={()=>{
            sendMessage()
            }}
            style={{
              padding: '10px',
              backgroundColor: '#003B95',
              color: 'white',
              borderRadius: '5px',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            Send 🚀
          </button>
        </div>
      </div>
    </div>

    </>
  );
}

export default App;
