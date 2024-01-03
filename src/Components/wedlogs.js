// pages/log.js

import Head from 'next/head';
import { useEffect, useRef } from 'react';

const WeddingCard = ({ hallName, date, time, otherDetails }) => {
  return (
    <div className="wedding-card">
      <h2>{hallName}</h2>
      <p>Date: {date}</p>
      <p>Time: {time}</p>
      <p>Other Details: {otherDetails}</p>
    </div>
  );
};

const LogPage = () => {
  const bookedHalls = [
    {
      hallName: 'Hall 1',
      date: '2024-05-15',
      time: '3:00 PM',
      otherDetails: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      hallName: 'Hall 2',
      date: '2024-06-20',
      time: '5:30 PM',
      otherDetails: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      hallName: 'Hall 3',
      date: '2024-07-10',
      time: '2:00 PM',
      otherDetails: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    },
    {
        hallName: 'Hall 3',
        date: '2024-07-10',
        time: '2:00 PM',
        otherDetails: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
      },
      {
        hallName: 'Hall 3',
        date: '2024-07-10',
        time: '2:00 PM',
        otherDetails: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
      },

    // Add more booked halls as needed
  ];

  const containerRef = useRef(null);

  useEffect(() => {
    // Scroll to the bottom of the container on mount
    containerRef.current.scrollTop = containerRef.current.scrollHeight;
  }, []);

  return (
    <div className="wedding-page">
  <Head>
    <title>Booked Wedding Halls</title>
  </Head>
  <h1 className="blue-heading">Booked Wedding Halls</h1>
  <div className="wedding-cards-container" ref={containerRef}>
    {bookedHalls.map((hall, index) => (
      <WeddingCard key={index} {...hall} />
    ))}
  </div>
  <style jsx global>{`
    body {
      font-family: 'Arial', sans-serif;
    }

    .wedding-page {
      max-width: 800px;
      margin: auto;
      padding: 20px;
    }

    .blue-heading {
      color: blue;
      border-bottom: 2px solid blue;
      padding-bottom: 5px;
      text-align: center; /* Center the text within the h1 */
      font-size: 28px;
    }

    .wedding-cards-container {
      max-height: 400px;
      overflow-y: auto;
    }

    .wedding-card {
      border: 2px solid #ddd;
      padding: 10px;
      margin-bottom: 20px;
    }
  `}</style>
</div>
  );
};

export default LogPage;
