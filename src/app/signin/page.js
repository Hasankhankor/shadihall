'use client'
// Import necessary modules and components
import axios from "axios";
import Navbar from "../../Components/navbarSection/navbar";
import {
	VStack,
	Box,
	Input,
	Text,
	FormControl,
	FormLabel,
	Link,
	Heading,
	Flex,
  } from "@chakra-ui/react";

  import { useState, useContext } from "react";
  import { useRouter } from 'next/navigation';
  import { AuthContext } from "../../context/AuthContextProvider";
  import {
	Modal,
	ModalBody,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay
  } from '@chakra-ui/react';
  import { useDisclosure } from '@chakra-ui/react';
  import { Button } from '@chakra-ui/react';
  const Signin = () => {
	const router = useRouter();
	const authContext = useContext(AuthContext);
	const { setAuth } = authContext || {};

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const reset = () => {
	  setEmail("");
	  setPassword("");
	};
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [modalText, setModalText] = useState("Your description goes here");

	const handleButtonClick = () => {
	  onOpen();
	};

	const handleConfirm = () => {
	  // Add your logic for handling the "Confirm" button click here
	  onClose();
	};

	const handleCancel = () => {
	  // Add your logic for handling the "Cancel" button click here
	  onClose();
	};
	const signinReq = async () => {
	  try {
		const res = await axios.post("http://192.168.100.107:5000/api/user/login", {
			email: email,
			password: password,
		});

		console.log(res.data);

		if (res.data) {
			localStorage.setItem("email",true)
			localStorage.setItem("email2",email)
			reset();
			router.push("/")

		}




	 else {
		  console.error("No token received in the response");
		}
	  } catch (error) {
		console.error("Error during sign-in", error);
	  }
	};


	return (
	  <Box>
		<Navbar />

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
          Sign In To Your Account
        </Heading>

        <VStack m="30px auto" w="350px" p="15px">
          <FormControl>
		  <FormLabel color="blackAlpha.800" fontSize="14px">
			  Email
			</FormLabel>
			<Input
			  onChange={({ target }) => setEmail(target.value)}
			  value={email}
			  mb="15px"
			  type="email"
			  placeholder=" Email Address"
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

<div>
      <FormControl>
        <Button
          onClick={() => {
            onOpen(); // Open the modal when the button is clicked
            signinReq(); // Simulate sign-in
          }}
          mb="15px"
          fontSize="14px"
          color="white"
          cursor="pointer"
          bg="#003B95"
          fontWeight="500"
          _hover={{ bg: "#265cad" }}
        >
          Continue with email
        </Button>
      </FormControl>

      {/* Modal component */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Welcome!</ModalHeader>
          <ModalBody>
            <p>
              😊 Your account has been Sign-In successfully.
              <br />
              You are now signed in. Redirecting to home...
            </p>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>

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
              {/* ... rest of your social login links ... */}
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
		  </FormControl>
        </VStack>

      </VStack>
    </Flex>
	</Box>
	);
  };

  export default Signin;
