// components/WeddingHall.js

import React from 'react';
import Navbar from "../../../Components/navbarSection/navbar";
import {Spacer} from "@nextui-org/spacer";
import { Flex } from '@chakra-ui/react';


const WeddingHall = ({ hallDetails = {} }) => {
  const { name = 'Unknown Hall', capacity = 'N/A', location = 'N/A', imageSrc = '' } = hallDetails;
  const renderText = (textArray) => {
    return textArray.map((text, index) => (
      <div key={index} className={`text-wrapper-${index + 1}`}>
      {text}
    </div>
       ));
      };
      const venueData = {
        venueType: "Marquee/Banquet",
        // amenities: ["Yes"],
        parkingSpace: "500",
        catering: "Internal",
        wheelchairAccessible: true,
        // staff: ["Male", "Female"],
        description: [
          // "White Rose Marquee, an elegant vintage themed event space and your",
          // "ideal location for weddings, engagement parties, corporate events, bridal",
          // "and baby showers, anniversaries, birthday parties and more."
        ],
        // additionalInformation: "100% payment is required 10 days before the event",
      };
  return (
    <>

    <Navbar/>

    <Spacer y={2} />
<div></div>
    <div className="wedding-hall-container">
    <Spacer x={2} />
      <div className="hall-details">
      <div className="div-profile">

      <Spacer y={2} />
      <button className="div-wrapper">
        <div className="div">Pricing</div>
      </button>
      <Spacer y={2} />
      <button className="button-2">
        <div className="text-wrapper-2">Location</div>
      </button>
      <Spacer y={2} />
      <button className="button-3">
        <div className="text-wrapper-3">Reviews</div>
      </button>
    </div>
    <Spacer y={5} />
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
  <div className='div' style={{ flex: 1}}>
    <div style={{ flex : 1, justifyContent: 'center' }}>
          <div className="hall-image" style={{ width: '400px', height: '400px', borderRadius: '20px', overflow: 'hidden', display: 'flex',marginLeft:'710px' }}>
    <img
        src={"https://image-tc.galaxy.tf/wijpeg-5h8z45mlagjtfm1n4jsszvcqe/whatsapp-image-2021-01-25-at-3.jpg?width=1600&height=1066"}
        alt={name}
        style={{ maxWidth: '100%', maxHeight: '100%', width: 'auto', height: 'auto', objectFit: 'cover',
       }}
    />
</div>


      <div className="heading-details">Details</div>


      <img className="venue-type-svg" alt="Venue type svg" src="https://thumbs.dreamstime.com/b/location-pin-icon-165980583.jpg" />
      <div style={{  alignItems: 'center' }}>
  <div className="heading-venue-type" style={{ marginRight: '8px' , fontSize:'10px'}}>VENUE TYPE</div>
  <div className="text-wrapper">{venueData.venueType}</div>
</div>
      <img className="amenities-svg" alt="Amenities svg" src="https://img.freepik.com/premium-vector/amenities-icon-simple-element-illustration-amenities-concept-symbol-design-can-be-used-web-mobile_159242-7844.jpg?w=2000" />
      <div className="heading-amenities"style={{ marginRight: '8px' , fontSize:'16px'}}>AMENITIES</div>
      <div className="text-wrapper-5">{venueData.amenities}</div>
      <img className="parking-space-svg" alt="Parking space svg" src="https://t4.ftcdn.net/jpg/01/92/38/33/360_F_192383331_4RSRvuUk5OQ0Td04bRGkGw1VJ4PO9lW3.jpg" />
      <div className="heading-parking"style={{ marginRight: '8px' , fontSize:'16px'}}>PARKING SPACE</div>
      <div className="text-wrapper-5">{venueData.parkingSpace}</div>
      <img className="catering-svg" alt="Catering svg" src="https://cdn-icons-png.flaticon.com/512/7040/7040555.png" />
      <div className="heading-catering"style={{ marginRight: '8px' , fontSize:'16px'}}>CATERING</div>
      <div className="text-wrapper-6">{venueData.catering}</div>
      <img className="wheelchair" alt="Wheelchair" src="https://cdn-icons-png.flaticon.com/512/657/657563.png" />
      <div className="heading-wheelchair"style={{ marginRight: '8px' , fontSize:'16px'}}>WHEELCHAIR ACCESSIBLE</div>
      <div className="text-wrapper-7">{venueData.wheelchairAccessible ? 'Yes' : 'No'}</div>
      <img className="staff-svg" alt="Staff svg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeBZQIvxUhTR1yBRe0Lgyste5DJ1YP75EAKUJi4Ibwmw&s" />
      <div className="heading-staff"style={{ marginRight: '8px' , fontSize:'16px'}}>STAFF</div>
      <div className="text-wrapper-5">{venueData.staff}</div>
      <img className="description-svg" alt="Description svg" src="https://static.thenounproject.com/png/2303077-200.png" />
      <div className="heading"style={{ marginRight: '8px' , fontSize:'16px'}}>DESCRIPTION</div>
      {venueData.description.map((paragraph, index) => (
  <p key={index} className={`text-wrapper-${index + 9}`}>
    {paragraph}
  </p>
))}
      <img className="additional-info-svg" alt="Additional info svg" src="https://t4.ftcdn.net/jpg/03/22/63/91/360_F_322639135_8stIcJcX4X84m56tV5wNnDmhFd6ZIYRG.jpg" />
      <div className="heading-additional">ADDITIONAL INFORMATION</div>
      <p className="text-wrapper-11">{venueData.additionalInformation}</p>
    </div>
    </div>
</div>

      <Spacer y={5} />
      <div className="div-react-calendar">
<button className="button">
<div className="text-wrapper">‹</div>
</button>
<div className="button-december">December 2023</div>
<button className="div-wrapper">
<div className="div">›</div>
</button>
<div className="abbr-monday-mon-wrapper">
<div className="abbr-monday-mon">Mon</div>
</div>
<div className="abbr-tuesday-tue-wrapper">
<div className="text-wrapper-2">Tue</div>
</div>
<div className="abbr-wednesday-wed-wrapper">
<div className="abbr-wednesday-wed">Wed</div>
</div>
<div className="abbr-thursday-thu-wrapper">
<div className="text-wrapper-2">Thu</div>
</div>
<div className="abbr-friday-fri-wrapper">
<div className="abbr-friday-fri">Fri</div>
</div>
<div className="abbr-saturday-sat-wrapper">
<div className="abbr-saturday-sat">Sat</div>
</div>
<div className="abbr-sunday-sun-wrapper">
<div className="abbr-sunday-sun">Sun</div>
</div>
<button className="abbr-november-wrapper">
<div className="text-wrapper-3">27</div>
</button>
<button className="button-2">
<div className="text-wrapper-3">28</div>
</button>
<button className="button-3">
<div className="text-wrapper-3">29</div>
</button>
<button className="button-4">
<div className="text-wrapper-3">30</div>
</button>
<button className="abbr-december-wrapper">
<div className="abbr-december">1</div>
</button>
<button className="button-5">
<div className="abbr-december">2</div>
</button>
<button className="button-6">
<div className="abbr-december">3</div>
</button>
<button className="button-7">
<div className="abbr-december">4</div>
</button>
<button className="button-8">
<div className="abbr-december">5</div>
</button>
<button className="button-9">
<div className="abbr-december">6</div>
</button>
<button className="button-10">
<div className="abbr-december">7</div>
</button>
<button className="button-11">
<div className="abbr-december">8</div>
</button>
<button className="button-12">
<div className="abbr-december">9</div>
</button>
<button className="button-13">
<div className="text-wrapper-3">10</div>
</button>
<button className="button-14">
<div className="text-wrapper-3">11</div>
</button>
<button className="button-15">
<div className="text-wrapper-3">12</div>
</button>
<button className="button-16">
<div className="text-wrapper-3">13</div>
</button>
<button className="button-17">
<div className="text-wrapper-3">14</div>
</button>
<button className="button-18">
<div className="text-wrapper-3">15</div>
</button>
<button className="button-19">
<div className="text-wrapper-3">16</div>
</button>
<button className="button-20">
<div className="text-wrapper-3">17</div>
</button>
<button className="button-21">
<div className="text-wrapper-3">18</div>
</button>
<button className="button-22">
<div className="text-wrapper-3">19</div>
</button>
<button className="button-23">
<div className="text-wrapper-3">20</div>
</button>
<button className="button-24">
<div className="text-wrapper-3">21</div>
</button>
<button className="button-25">
<div className="text-wrapper-3">22</div>
</button>
<button className="button-26">
<div className="text-wrapper-3">23</div>
</button>
<button className="button-27">
<div className="text-wrapper-3">24</div>
</button>
<button className="button-28">
<div className="abbr-december-2">25</div>
</button>
<button className="button-29">
<div className="abbr-december-2">26</div>
</button>
<button className="button-30">
<div className="abbr-december-3">27</div>
</button>
<button className="button-31">
<div className="abbr-december-4">28</div>
</button>
<button className="button-32">
<div className="abbr-december-4">29</div>
</button>
<button className="button-33">
<div className="abbr-december-5">30</div>
</button>
<div className="button-34">
<div className="abbr-december-6">31</div>
<div className="text-wrapper-4">15% off</div>
</div>
</div>

<Spacer y={5} />

        <h2>{name}</h2>
        <p>Capacity: {capacity}</p>
        <p>Location: {location}</p>
      </div>



      <style jsx>{`
        .wedding-hall-container {
          display: flex;
          justify-content: space-between;
          padding: 20px;
          border: 1px solid #ddd;
          margin: 10px;
        }

        .hall-details {
          flex: 1;
        }

        .hall-image {
          flex: 1;
          margin-left: 20px;
        }

        img {
          max-width: 100%;
          height: auto;
        }
      `}</style>
    </div>
    <section className="text-gray-400 bg-gray-900 body-font relative">
      <div className="container px-5 py-10 mx-auto flex flex-col sm:flex-row">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            title="map"
            className="absolute inset-0 w-full h-full"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            scrolling="no"
            src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
            style={{ filter: 'grayscale(1) contrast(1.2) opacity(0.16)' }}
          ></iframe>
          <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">ADDRESS</h2>
              <p className="mt-1">Photo booth tattooed prism, portland taiyaki hoodie neutra typewriter</p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">EMAIL</h2>
              <a href="#" className="text-indigo-400 leading-relaxed">
                example@email.com
              </a>
              <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">PHONE</h2>
              <p className="leading-relaxed">123-456-7890</p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full mt-8 md:mt-0">
          <h2 className="text-white text-lg mb-1 font-medium title-font">Feedback</h2>
          <p className="leading-relaxed mb-5">Post-ironic portland shabby chic echo park, banjo fashion axe</p>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-400">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-400">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="message" className="leading-7 text-sm text-gray-400">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            ></textarea>
          </div>
          <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Button
          </button>
          <p className="text-xs text-gray-400 text-opacity-90 mt-3">
            Chicharrones blog helvetica normcore iceland tousled brook viral artisan.
          </p>
        </div>
      </div>
    </section>
    </>
  );
};

export default WeddingHall;