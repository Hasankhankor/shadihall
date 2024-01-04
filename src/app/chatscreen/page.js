

"use client"
import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

import Navbar from "../../Components/navbarSection/navbar";
import SearchBox from "../../Components/serachBox/searchBox";

const socket = io("http://192.168.100.16:5000");
const adminUsername = 'Hasan';
function App() {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');
    const [chatInfo, setChatInfo] = useState({ adminPhoto: '', adminUsername: '' }); // Initialize chatInfo with default values

  useEffect(() => {
    // Listen for incoming messages
    socket.on('message', (data) => {
      setMessages((prevMessages) => [...prevMessages, data]);
      // console.log('newMessage:', newMessage);

    });


    return () => {
      socket.disconnect();
    };
  }, []);

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {

      socket.emit('message', { text: newMessage });
      console.log(newMessage)
      setMessages(newMessage)
    }
  };

  return (
    <>
     <div>
      <Navbar />
      <SearchBox />
      <div style={{ maxWidth: '800px', margin: 'auto' }}>

        <div style={{ padding: '20px', borderBottom: '1px solid #ccc' }}>
        {/* src={chatInfo.adminPhoto} */}
          <img src={"xX.png"} alt="User Photo" style={{ width: '40px', height: '40px', borderRadius: '50%', marginRight: '10px' }} />
          <h1>{chatInfo.adminUsername}</h1>

          <div>
            {/* {messages.map((message, index) => (
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

                {message.sender && (
                  <>
                    <img src={message.sender.photo} alt="User Photo" style={{ width: '30px', height: '30px', borderRadius: '50%', marginRight: '10px' }} />
                    <span>{message.sender.username}:</span>
                  </>
                )}
                {message.text}
              </div>
            ))} */}
          </div>
        </div>
        <div style={{ padding: '20px', borderTop: '1px solid #ccc' }}>
          <input
            type="text"
            placeholder="Type your message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            style={{ width: '70%', padding: '10px', marginRight: '10px' }}
          />
          <button
            onClick={()=>{
              handleSendMessage()
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
