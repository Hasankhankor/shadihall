import React, { useState } from "react";
import { SearchIcon } from '@chakra-ui/icons';
import "../../app/globals.css"
import BallLights from '../BallLights';
import {
  Box,
  Text,
  Input,
  InputGroup,
  InputLeftElement,
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  Portal, // Import Portal from Chakra UI
} from "@chakra-ui/react";
import Head from 'next/head';
import Link from "next/link";
import DatePicker from "../DatePicker";
import styles from "./bgComponent.module.css";
import { GuestContext } from "../../context/GuestContext";
import { Spacer } from "@nextui-org/spacer";

const BgComponent = () => {
  const [inputData, setInputData] = useState("");
  const [adult, setAdult] = useState(0);
  const [childrens, setChildrens] = useState(0);
  const [room, setRoom] = useState(0);

  const handledec = () => {
   if (adult > 0) {
    setAdult((prevCount) => prevCount + 1);
  }
  };

  const handleIncre = () => {
    // Implement your logic for increasing the count
  };

  const handlechildrendec = () => {
    // Implement your logic for decreasing the children count
  };

  const handlechildrenincre = () => {
    // Implement your logic for increasing the children count
  };

  const handleroomdec = () => {
    // Implement your logic for decreasing the room count
  };

  const handleroomincre = () => {
    // Implement your logic for increasing the room count
  }


  return (
    <Box
  w="100%"
  color="white"
  height={{ md: "800px", sm: "500px" }}
  bg="black"
>
  <Box className={styles.bgImg} width="100%" height="110%">
  <Box w={{ base: "100%", md: "80%" }} margin="auto" p={7}>
  <Spacer y={10} />
  <Box className={styles.textOnImg} display="flex" justifyContent="center" alignItems="center" mb={{ base: -5, md: -8 }}>
  <Text fontSize={{ base: "10px", md: "40px", lg: "46px" }} fontWeight="bold" textShadow="4px 7px 16px #003580">
    Make a 3-minute plan for the wedding.
    <h5>Easy Booking, Easy Living</h5>
  </Text>

</Box>
      <Spacer y={12} />


    </Box>


          {/* <Box
  display={{
    base: "block",
    sm: "block",
    md: "flex",
    lg: "flex",
    xl: "flex",
    "2xl": "flex",
  }}
  flexDirection={{
    base: "column",
    md: "row",
  }}
  width={{
    base: "100%",
    sm: "100%",
    md: "98%",
    lg: "",
    xl: "88%",
    "2xl": "50%",
  }}
  margin={"auto"}
  marginTop={"-20px"}
  backgroundColor={"white"}
  height={"auto"}
  border="2px solid #003580"
>
<InputGroup
      size="md" // Adjust the size of the InputGroup
      // Add some border-radius for a modern look
      borderColor="gray.200" // Change the border color if needed
    >
      <InputLeftElement pointerEvents="none">
        <SearchIcon marginTop={"12px"} color={"gray.400"} />
      </InputLeftElement>
      <Input
        type="tel"
        placeholder="Where to book your Hall?"
        height="50px" // Adjust the height to make it smaller
         // Match the border-radius with the InputGroup
        color={"black"}
        onChange={({ target }) => setInputData(target.value)}
        _focus={{
          borderColor: "blue.300", // Change the border color on focus if needed
        }}
      />
    </InputGroup>

  <Link href={`/property?city=${inputData}`} passHref>
    <Button
      as="a"
      paddingLeft={"60px"}
      paddingRight={"60px"}
      height={"50px"}
      fontFamily={"Times New Roman"}
      backgroundColor={"#003580F"}
      color="#003580"
      fontSize={{ base: "16px", sm: "20px" }}
      width={{
        base: "100%",
        sm: "100%",
        md: "100px",
        lg: "100px",
        xl: "100px",
        "2xl": "100px",
      }}
      borderRadius="25"
      fontWeight={"bold"}
      _hover={{
        backgroundColor: "#003580",
        boxShadow: "0 0 10px rgba(0, 53, 128, 0.8)",
        color: "#FFFFFF",
        textDecoration: "none",
      }}
    >
      Search
    </Button>
  </Link>
</Box>; */}
 <div style={{
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "10px",
  boxSizing: "border-box",
  '@media (max-width: 600px)': {
    padding: "5px",  // Adjust the padding for smaller screens
  }
}}>
      {/* Using the Link component for routing */}
      <Link href="/Weddinglisthall"passHref={true} legacyBehavior>
        <a>
          <button style={{ display: "flex", justifyContent: "center", alignItems: "center" }} className={styles.glowing_btn}>
            <span className={styles.glowing_text}>
              B<span className={styles.faulty_letter}>OO</span>K NOW
            </span>
          </button>
        </a>
      </Link>
    </div>
    <Spacer y={10} />
    <Spacer y={10} />
    <BallLights />
        </Box>

      </Box>
  );
};

export default BgComponent;