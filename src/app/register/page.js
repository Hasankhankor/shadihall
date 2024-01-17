"use client"
import Navbar from "../../Components/navbarSection/navbar";
import SearchBox from "../../Components/serachBox/searchBox";
import {
	Box,
	Card,
	CardBody,
	CardFooter,
	Image,
	Stack,
	Heading,
	Text,
	Flex,
	Divider,
	ButtonGroup,
	Button,
} from "@chakra-ui/react";
import { Rating, RatingStar } from "flowbite-react";
import { Spacer } from "@nextui-org/spacer";
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import {


  VStack,

  FormControl,
  FormLabel,
  Input,

  Link,
} from '@chakra-ui/react';
import axios from "axios";

const cardHoverStyle = {
	transition: "transform 0.2s ease-in-out",
	"&:hover": {
		transform: "scale(1.19)",
	},
};


const signinReq = () => {
  // Implement your sign-in logic here

};
function useRegister() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [hallName, setHallName] = useState('');
    const [hallLocation, setHallLocation] = useState('');
    const [hallPrice, setHallPrice] = useState('');


    const router= useRouter();

    const signinReq = async () => {
      try {
        const formData = {
          email:email,
          password:password,
          hallname:hallName,
          halllocation:hallLocation,
          hallprice:hallPrice


        };

        // Replace 'YOUR_API_ENDPOINT' with the actual endpoint
        const response = await axios.post('http://192.168.100.107:5000/api/user/halls', formData);

        // Handle the response as needed
        console.log('API Response:', response.data);

        // You may want to redirect the user or perform other actions here

      } catch (error) {
        // Handle errors
        console.error('API Request Error:', error.message);
        router.push("/");
      }
    };

    const handleImageUpload = (event) => {
      // Implement your image upload logic here
    };

    useEffect(() => {
      const cardId=localStorage.getItem("hallid")
      const fetchAPI=async()=>{
        const res=await axios.get(`http://192.168.18.125:5000/api/halls?id=${cardId}`)
        console.log(res.status)
        if (res.data!=null) {
          router.push("/userpandeditprofile")

        } else {

        }
      }
      fetchAPI()

    }, [])

	return (
		<>			<Navbar />


<Flex align="center" justify="center" direction="column">

<Box mb="24px">
  <img
    src="/sign.png"
    alt="sign"
    width="300px"
    height="300px"
  />
</Box>

{/* Right side form */}
<VStack w="90%" m="auto" mt="50px">
  <Heading
    mb="24px"
    as="h1"
    fontSize="40px"
    color="#003B95"
    textAlign="center"
  >
    Register Your Hall,Destination.
  </Heading>

  <VStack m="30px auto" w="350px" p="15px">
    <FormControl >
      <FormLabel color="blackAlpha.800" fontSize="14px">
        Email
      </FormLabel>
      <Input
        onChange={({ target }) => setEmail(target.value)}
        value={email}
        mb="15px"
        type="email"
        placeholder="Email Address"
      />
      <FormLabel color="blackAlpha.800" fontSize="14px">
        Password
      </FormLabel>
      <Input
        onChange={({ target }) => setPassword(target.value)}
        value={password}
        mb="15px"
        type="password"
        placeholder="Password"
      />


      <FormLabel color="blackAlpha.800" fontSize="14px">
        Hall Name
      </FormLabel>
      <Input
        onChange={({ target }) => setHallName(target.value)}
        value={hallName}
        mb="15px"
        type="text"
        placeholder="Hall Name"
      />

      <FormLabel color="blackAlpha.800" fontSize="14px">
        Hall Location
      </FormLabel>
      <Input
        onChange={({ target }) => setHallLocation(target.value)}
        value={hallLocation}
        mb="15px"
        type="text"
        placeholder="Hall Location"
      />

      <FormLabel color="blackAlpha.800" fontSize="14px">
        Hall Price
      </FormLabel>
      <Input
        onChange={({ target }) => setHallPrice(target.value)}
        value={hallPrice}
        mb="15px"
        type="text"
        placeholder="Hall Price"
      />


      <Input
      onClick={()=>{
        signinReq()
      }}

        mb="15px"
        fontSize="14px"
        color="white"
        type="submit"
        cursor="pointer"
        value="Continue with email"
        bg="#003B95"
        fontWeight="500"
        _hover={{ bg: "#265cad" }}
      />
    </FormControl>

    <Text mb="16px !important" textAlign="center">
      By signing in or creating an account, you agree with our{" "}
      <Link
        textDecoration="underline"
        fontWeight="bold"
        color="blackAlpha.800"
      >
        terms and privacy policy.
      </Link>{" "}
    </Text>

    <Box border="1px solid #ebecec" p="24px">
      <Text mb="24px" fontWeight="bold" color="blackAlpha.800">
        Or connect with
      </Text>

      <Flex gap="10px">

      </Flex>
    </Box>

    <Text mb="16px !important">
      Don’t have an account yet?{" "}
      <Link
        textDecoration="underline"
        fontWeight="bold"
        color="blackAlpha.800"
      >
        Sign up here!
      </Link>
    </Text>

    <Text
      w="300px"
      fontSize="12px"
      mb="16px !important"
      textAlign="center"
    ></Text>
  </VStack>
</VStack>
</Flex>





            </>


	);
}

export default useRegister;
