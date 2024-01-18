// components/WeddingHall.js
"use client";
import React, { useEffect, useState } from 'react';
// import Navbar from "../../../Components/navbarSection/navbar";
import {Spacer} from "@nextui-org/spacer";
import { Flex,Button,Avatar } from '@chakra-ui/react';
import styles from "./WeddingHall.module.css";
import  axios  from 'axios';
import { useRouter } from 'next/navigation';
import {  Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@chakra-ui/react";
import Navbarr from "@/Components/navbarSection/navbar";
import DownCard from "@/Components/downcard";
import Link from "next/link";
import { HiLogin } from "react-icons/hi";
const WeddingHall = ({ hallDetails = {} }) => {
  const router=useRouter();
  const [ownername, setownername] = useState("")
  const [hallname, sethallname] = useState("")
  const [halllocation, sethalllocation] = useState("")
  const [hallprice, sethallprice] = useState("")
  const [halldescription, sethalldescription] = useState("")

  useEffect(() => {
    const cardId=localStorage.getItem("cardId")
    const fetchAPi=async()=>{
      const res=await axios.get(`http://192.168.100.107:5000/api/halls?id=${cardId}`)
      console.log(res.data)
      setownername(res.data.email)
      sethallname(res.data.hallname)
      sethalllocation(res.data.halllocation)
      sethalldescription(res.data.halldescription)
      sethallprice(res.data.hallprice)
    }
    fetchAPi()


  }, [])

  const sendData=async()=>{
    const response=axios.post('http://192.168.100.107:5000/api/user/logshalls',{

  hallname:hallname,
  halllocation:halllocation,
  halldescription:halldescription,
  hallprice:hallprice
    })
    console.log(response)

  }
  const sendchatid=()=>{
    localStorage.setItem("SenderId",ownername)
  }

  const { name = 'Unknown Hall', capacity = 'N/A', location = 'N/A', imageSrc = '' } = hallDetails;
  const renderText = (textArray) => {
    return textArray.map((text, index) => (
      <div key={index} className={`text-wrapper-${index + 1}`}>
      {text}
    </div>
       ));
      };
      const venueData = {
        venueType: hallname,
        halllocation:halllocation,
        ownername:ownername,
        hallprice:hallprice,
        // amenities: ["Yes"],
        parkingSpace: "500",
        catering: "Internal",
        wheelchairAccessible: true,
        // staff: ["Male", "Female"],
        description: halldescription,

      };
      const { isOpen, onOpen, onClose } = useDisclosure();
      const [modalText, setModalText] = useState("Your description goes here");

      const handleButtonClick = () => {
        onOpen();
      };

      const handleConfirm = () => {

        onClose();
      };

      const handleCancel = () => {

        onClose();
      };

  return (
    <>


<Navbarr />

    <Spacer y={10} />

    <div className="wedding-hall-container" style={{ display: 'flex', justifyContent: 'space-between' }}>
  <div className="hall-details" style={{ width: '80%' }}>
    <Spacer x={8} />
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
    <div className="wedding-hall" style={{ display: 'flex', flexDirection: 'column', maxWidth: '800px', margin: '120px auto' }}>
  <div className="container" style={{ marginBottom: '8px', flexDirection: 'column' }}>
    <div className="heading-parking" style={{ fontSize: '16px' }}>Hall Location</div>
    <div className="text-wrapper-5">{venueData.halllocation}</div>
  </div>
  <Spacer x={5} />
  <div className="container" style={{ marginBottom: '8px', flexDirection: 'column' }}>
    <div className="heading-parking" style={{ fontSize: '16px' }}>Owner Name</div>
    <div className="text-wrapper-5">{venueData.ownername}</div>
  </div>
  <Spacer x={5} />
  <div className="container" style={{ marginBottom: '8px', flexDirection: 'column' }}>
    <div className="heading-parking" style={{ fontSize: '16px' }}>Hall Description</div>
    <div className="text-wrapper-5">{venueData.description}</div>
    <Spacer x={5} />

  </div>
</div>

    <Spacer y={8} />
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
        <div style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '10px' }}>Details</div>
        <div style={{ maxWidth: '800px', textAlign: 'center' }}>


    <div style={{ marginBottom: '20px' }}>
      <img style={{ width: '50px', height: '50px', marginBottom: '8px' }} alt="Venue type svg" src="https://thumbs.dreamstime.com/b/location-pin-icon-165980583.jpg" />
      <div style={{ fontSize: '10px' }}>VENUE TYPE</div>
      <div>{venueData.venueType}</div>
    </div>

    <div style={{ marginBottom: '20px' }}>
      <img style={{ width: '50px', height: '50px', marginBottom: '8px' }} alt="Amenities svg" src="https://img.freepik.com/premium-vector/amenities-icon-simple-element-illustration-amenities-concept-symbol-design-can-be-used-web-mobile_159242-7844.jpg?w=2000" />
      <div style={{ fontSize: '16px' }}>AMENITIES</div>
      <div>{venueData.amenities}</div>

    </div>
</div>
      </div>
    </div>
  </div>




  <div style={{ width: '50%' }}>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {/* Hero Image */}
      <img
        style={{ width: '250%', maxWidth: '600px', height: 'auto', marginBottom: '20px' }}
        alt="Hero Image"
        src="https://scontent.fisb17-1.fna.fbcdn.net/v/t1.6435-9/149258122_3750934858288259_5596410844992058676_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=7f8c78&_nc_eui2=AeHGGK_4GKCfmZhPsyK70bLKj7VJMCWQcOqPtUkwJZBw6t6AWhW9RelyYQKzhOSpP-lOmrHvlOThYJPteDKV8AVk&_nc_ohc=_cn-52vcLQ4AX87iaPw&_nc_ht=scontent.fisb17-1.fna&oh=00_AfBRWttz0pml2DaZNNiVaCt6O8cnrqslwL9cOTmVnUJfsg&oe=65C34A4B"
      />


      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px' }}>
      <div>
      <Button
        color={"blue"}
        variant="solid"
        colorScheme="blue"
        _hover={{
          bg: "blue.500",
          color: "white",
          boxShadow: "0 0 10px rgba(0, 0, 255, 0.8)",
          borderRadius: "8px",
        }}
        onClick={handleButtonClick}
      >
        Book Now
      </Button>
      <Link href="/chatscreen">
        <Button onClick={sendchatid}>
        <Avatar alt="Remy Sharp" src="https://cdn-icons-png.flaticon.com/512/5962/5962463.png" />
        </Button>

</Link>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Booking Success</ModalHeader>
          <ModalBody>
            <p>Are you absolutely certain that this magnificent and enchanting wedding hall, with its exquisite ambiance and breathtaking surroundings, has been unequivocally reserved exclusively for your joyous celebration</p>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={()=>{
              sendData()
              handleConfirm()
            }}>
              Confirm
            </Button>
            <Button variant="ghost" onClick={handleCancel}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
      </div>
    </div>
  </div>
</div>


      <Spacer y={5} />
      <h2 style={{ textAlign: 'center', color: 'darkblue', fontWeight: 'bold' }}>Explore More Halls Around You.</h2>



<Spacer y={5} />
<DownCard />




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