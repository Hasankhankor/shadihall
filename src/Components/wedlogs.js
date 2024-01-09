// pages/log.js
import { useEffect, useRef,useState } from 'react';
import  axios  from 'axios';
import Head from 'next/head';



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

  const [BookedData2, setBookedData2] = useState([])

  useEffect(() => {
   const fetchAPI=async()=>{
    const res=await axios.get("http://192.168.18.125:5000/api/logshalls")
    console.log(res.data)
    setBookedData2(res.data)

   }
   fetchAPI()

  }, [])

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
    {BookedData2.map((hall) => {
      return(
        <div key={hall._id} className="wedding-card">
        <h2>{hall.hallName}</h2>
        <p>owner email: {hall.email}</p>
        <p>price {hall.hallprice}</p>
        <p>Other Details: {hall.halldescription}</p>
      </div>
      )
    })}

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
