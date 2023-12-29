import React, { useState } from "react";
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
import { SearchIcon } from "@chakra-ui/icons";
import Link from "next/link";
import DatePicker from "../DatePicker";
import styles from "./bgComponent.module.css";
import { GuestContext } from "../../context/GuestContext";
const BgComponent = ({ heading, subHeading }) => {
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
    <Box w="80%" margin="auto" p={7}>
      <Box
        className={styles.textOnImg}
        display="flex"
        justifyContent="center"
        alignItems="center"
        mb={-10}
      >
        <Text
          fontSize={{ base: "24px", md: "40px", lg: "56px" }}
          fontWeight="bold"
          textShadow="4px 7px 16px #003580"
        >
          Make a 3-minute plan for wedding.
        </Text>
      </Box>

      <Box
        className={styles.textOnImg}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Text
          fontSize={{ base: "24px", md: "40px", lg: "56px" }}
          textShadow="7px 8px 8px #003580"
        >
          {subHeading}
        </Text>
      </Box>
          </Box>
          <Box
            display={{
              base: "block",
              sm: "block",
              md: "flex",
              lg: "flex",
              xl: "flex",
              "2xl": "flex",
            }}
            width={{
              base: "",
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
            border="2px solid  #003580 "
          >
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                // <SearchIcon marginTop={"10px"} color={"gray.400"} />
              />
              <Input
                type="tel"
                placeholder="Where to book your Hall?"
                borderRight={"4px solid "}
                height="50px"
                borderRadius={"0px"}
                color={"black"}
                onChange={({ target }) => setInputData(target.value)}
              />
            </InputGroup>
            <Popover>
      <PopoverTrigger>
        <Box
          display={{
            base: "none",
            sm: "none",
            md: "flex",
            lg: "flex",
            xl: "true",
            "2xl": "flext",
          }}
          w="auto"
          justifyContent={"space-evenly"}
          alignItems="center"
          textAlign={"center"}
          color={"black"}
          borderRight={"4px solid #febb02"}
          gap="30px"
        >
          <Text mt="0 !important">{adult} adults</Text>
          <Text mt="0 !important">{childrens} children</Text>
          <Text mt="0 !important">{room} rooms</Text>
        </Box>
      </PopoverTrigger>
      <Portal>
        <PopoverContent>
          <PopoverArrow />
          <PopoverHeader color={"white"}>Header</PopoverHeader>
          <PopoverBody display={"flex"} justifyContent={"space-around"}>
    <Text width={"40%"}>Adult</Text>
    <Button
      disabled={adult === 0}
      onClick={handledec}
      border={"1px solid blue"}
      color={"black"}
    >
      -
    </Button>
    <Text marginTop={"5px"}>{adult}</Text>
    <Button
      onClick={handleIncre}
      border={"1px solid blue"}
      color={"black"}
    >
      +
    </Button>
  </PopoverBody>
          <PopoverBody display={"flex"} justifyContent={"space-around"}>
            <Text width={"40%"}>Children</Text>
            <Button
              disabled={childrens === 0}
              onClick={handlechildrendec}
              border={"1px solid blue"}
              color={"black"}
            >
              -
            </Button>
            <Text marginTop={"5px"}>{childrens}</Text>
            <Button
              onClick={handlechildrenincre}
              border={"1px solid blue"}
              color={"black"}
            >
              +
            </Button>
          </PopoverBody>
          <PopoverBody display={"flex"} justifyContent={"space-around"}>
            <Text width={"40%"}>Hall</Text>
            <Button
              disabled={room === 0}
              onClick={handleroomdec}
              border={"1px solid #003580"}
              color={"black"}
            >
              -
            </Button>
            <Text marginTop={"5px"}>{room}</Text>
            <Button
              onClick={handleroomincre}
              border={"1px solid blue"}
              color={"black"}
            >
              +
            </Button>
          </PopoverBody>
        </PopoverContent>
      </Portal>
    </Popover>
            {/* <Link href={/property?city=${inputData}}>
              <Button
                paddingLeft={"60px"}
                paddingRight={"60px"}
                height={"50px"}
                backgroundColor={"#003580"}
                colorScheme="blue"
                fontSize={{ sm: "20px" }}
                width={{
                  base: "100%",
                  sm: "100%",
                  md: "100px",
                  lg: "100px",
                  xl: "100px",
                  "2xl": "100px",
                }}
                borderRadius="0"
                fontWeight={"bold"}
              >
                Search
              </Button>
            </Link> */}
          </Box>
        </Box>
      </Box>
  );
};

export default BgComponent;