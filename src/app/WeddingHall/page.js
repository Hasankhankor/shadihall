// components/WeddingHall.js
"use client";
import React from 'react';
// import Navbar from "../../../Components/navbarSection/navbar";
import {Spacer} from "@nextui-org/spacer";
import { Flex } from '@chakra-ui/react';
import styles from "./WeddingHall.module.css";

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


    {/* <Navbar/> */}

    <Spacer y={2} />
<div></div>
<div className="wedding-hall-container">
      <Spacer x={2} />
      <div className="hall-details">
        <div className="div-profile">
          <Spacer y={2} />
          <button className="div-wrapper">
            <div className="div" style={{ color: 'blue', fontSize: '16px', fontWeight: 'bold' }}>Pricing</div>
          </button>
          <Spacer y={2} />
          <button className="button-2">
            <div className="text-wrapper-2" style={{ fontSize: '18px', fontWeight: 'italic' }}>Location</div>
          </button>
          <Spacer y={2} />
          <button className="button-3">
            <div className="text-wrapper-3" style={{ fontSize: '20px', textDecoration: 'underline' }}>Reviews</div>
          </button>
        </div>
        <Spacer y={5} />
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <div className='div' style={{ flex: 1 }}>
            <div style={{ flex: 1, justifyContent: 'center' }}>
              <div className="hall-image" style={{ width: '400px', height: '400px', borderRadius: '20px', overflow: 'hidden', display: 'flex', marginLeft: '710px' }}>
                <img
                  src={"https://image-tc.galaxy.tf/wijpeg-5h8z45mlagjtfm1n4jsszvcqe/whatsapp-image-2021-01-25-at-3.jpg?width=1600&height=1066"}
                  alt={name}
                  style={{ maxWidth: '100%', maxHeight: '100%', width: 'auto', height: 'auto', objectFit: 'cover' }}
                />
              </div>

              <div className="heading-details" style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '10px' }}>Details</div>

              <img className="venue-type-svg" alt="Venue type svg" src="https://thumbs.dreamstime.com/b/location-pin-icon-165980583.jpg" />
              <div style={{ alignItems: 'center' }}>
                <div className="heading-venue-type" style={{ marginRight: '8px', fontSize: '10px' }}>VENUE TYPE</div>
                <div className="text-wrapper">{venueData.venueType}</div>
              </div>
              <img className="amenities-svg" alt="Amenities svg" src="https://img.freepik.com/premium-vector/amenities-icon-simple-element-illustration-amenities-concept-symbol-design-can-be-used-web-mobile_159242-7844.jpg?w=2000" />
              <div className="heading-amenities" style={{ marginRight: '8px', fontSize: '16px' }}>AMENITIES</div>
              <div className="text-wrapper-5">{venueData.amenities}</div>
              <img className="parking-space-svg" alt="Parking space svg" src="https://t4.ftcdn.net/jpg/01/92/38/33/360_F_192383331_4RSRvuUk5OQ0Td04bRGkGw1VJ4PO9lW3.jpg" />
              <div className="heading-parking" style={{ marginRight: '8px', fontSize: '16px' }}>PARKING SPACE</div>
              <div className="text-wrapper-5">{venueData.parkingSpace}</div>
              {/* Continue with the rest of your code */}
            </div>
          </div>
        </div>
      </div>
    </div>

      <Spacer y={5} />


<Spacer y={5} />
<div>
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


    </>
  );
};

export default WeddingHall;