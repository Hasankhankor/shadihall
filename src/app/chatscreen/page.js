

"use client"
import React, { useState, useEffect } from 'react';
import styles from './chatscreen.module.css';


import io from 'socket.io-client';

import Navbar from "../../Components/navbarSection/navbar";

// import { initializeApp } from 'firebase/app';
// import { getAnalytics } from "firebase/analytics";
import { MenuIcon } from "@heroicons/react/outline"
import { Spacer } from "@nextui-org/spacer";
import  axios  from 'axios';


const socket = io("http://192.168.100.107:5000", { transports: ['websocket'] });

const adminUsername = 'Hasan';
function App() {
  const [messages, setMessages] = useState([]);
  const [messages2, setMessages2] = useState([]);
  const [messageInput, setMessageInput] = useState('');
    const [chatInfo, setChatInfo] = useState({ adminPhoto: '', adminUsername: '' }); // Initialize chatInfo with default values

    useEffect(() => {
      const userid=localStorage.getItem("email2")
      const fetchChats=async()=>{
        const res=await axios.get(`http://192.168.100.107:5000/api/user/chats/${userid}`)
        console.log(res.data)
        setMessages2(res.data)

      }
      fetchChats()

      const handlePrivateMessage = ({ senderId, message }) => {
        console.log("Received private message:", { senderId, text: message });

        // Assuming you have some user ID in your state to identify the sender
        const isCurrentUser = senderId === socket.id;

        // Update messages state using the functional update form
        setMessages(prevMessages => [...prevMessages, { text: message, sender: isCurrentUser }]);
      };

      // Listen for private messages
      socket.on('privateMessage', handlePrivateMessage);

      // Clean up the socket listener on component unmount
      return () => {
        socket.off('privateMessage', handlePrivateMessage);
      };
    }, []); // Empty dependency array to run effect once on mount

    const sendMessage = () => {
      const SenderID = localStorage.getItem("email2");
      const ReciverID=localStorage.getItem("SenderId")
      if (messageInput.trim() !== '') {
        console.log('Sending message:', { ReciverID,SenderID, text: messageInput });

        // Emit the private message
        socket.emit('privateMessage', { recipientId: ReciverID,senderId:SenderID, message: messageInput });

        // Update messages state for the sender
        setMessages(prevMessages => [...prevMessages, { text: messageInput, sender: true }]);

        setMessageInput('');
      }

};


  return (
    <>
     <div>
      <Navbar />
      <Spacer y={10} />
      <div className={styles.chatContainer}>
  <div style={{ width: '20%', borderRight: '1px solid #ccc', padding: '20px' }}>
    <h2 style={{ fontSize: '20px' }}>Users</h2>
    <ul style={{ listStyle: 'none', padding: 0 }}>
      <li style={{ marginBottom: '15px', display: 'flex', alignItems: 'center', fontSize: '18px' }}>
        <a href="/user1-profile">
          <img src="https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg" alt="User 1" style={{ width: '40px', height: '40px', borderRadius: '50%', marginRight: '15px' }} />
          User 1
        </a>
      </li>
      <li style={{ marginBottom: '15px', display: 'flex', alignItems: 'center', fontSize: '18px' }}>
        <a href="/user2-profile">
          <img src="https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg" alt="User 2" style={{ width: '40px', height: '40px', borderRadius: '50%', marginRight: '15px' }} />
          User 2
        </a>
      </li>
      <li style={{ marginBottom: '15px', display: 'flex', alignItems: 'center', fontSize: '18px' }}>
        <a href="/user3-profile">
          <img src="https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg" alt="User 3" style={{ width: '40px', height: '40px', borderRadius: '50%', marginRight: '15px' }} />
          User 3
        </a>
      </li>
    </ul>
  </div>
</div>


      <div style={{ maxWidth: '800px', margin: 'auto' }}>

        <div style={{ padding: '20px', borderBottom: '1px solid #ccc' }}>


        <h1 style={{ color: 'navy', fontWeight: 'bold' }}>{chatInfo.adminUsername}</h1>

          <div style={{flexDirection:"row-reverse" }}>
  {messages.map((message, index) => (
    <div
      key={index}
      style={{
        display: 'flex',
        flexDirection: message.sender ?'row' : 'row',
        alignItems: 'center',
        marginBottom: '10px',
        padding: '10px',
        width : '30%',
        borderRadius: '10px',

        background: message.sender ? '#003B95' : '#ebecec',
        color: message.sender ? 'white' : 'black',
      }}
    >
      {message.sender && (
        <img
          src={"xX.png"}
          alt="User Photo"
          style={{ width: '40px', height: '40px', borderRadius: '50%', marginRight: '10px' }}
        />
      )}
      <p>{message.text}</p>
      {!message.sender && (
        <img
          src={"xX.png"}
          alt="User Photo"
          style={{ width: '40px', height: '40px', borderRadius: '50%', marginLeft: '10px' }}
        />
      )}
    </div>
  ))}
</div>

        </div>
        {/* this below code is for Receiver */}
        {/* <div>
  {messages2.map((message, index) => (
    <div
      key={index}
      style={{
        display: 'flex',
        flexDirection: message.sender ? 'row-reverse' : 'row',
        alignItems: 'center',
        marginBottom: '10px',
        borderRadius: '10px',
        background: message.sender ? '#003B95' : '#ebecec', // Blue for user's sent messages, Grey for replies
        color: message.sender ? 'white' : 'black',
        padding: '10px',
        maxWidth: '70%', // Limit the width of the message box
      }}
    >

        <img
          src={"xX.png"}
          alt="Receiver Photo"
          style={{ width: '40px', height: '40px', borderRadius: '50%', marginRight: '10px' }}
        />

      <p style={{ margin: 0 }}>{message.message}</p>

        <img
          src={"xX.png"}
          alt="User Photo"
          style={{ width: '40px', height: '40px', borderRadius: '50%', marginLeft: '10px' }}
        />

    </div>
  ))}
</div> */}

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
