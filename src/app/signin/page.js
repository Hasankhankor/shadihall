'use client'
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
  import axios from "axios";
  import { useRouter } from 'next/navigation'
  import { useContext, useEffect, useState } from "react";
  import { BsGithub } from "react-icons/bs";
  import Navbar from "../../Components/navbarSection/navbar";
  import { AuthContext } from "../../context/AuthContextProvider";
  import { Spacer } from "@nextui-org/spacer";
  const Signin = () => {
	const router = useRouter();
	const authContext = useContext(AuthContext);
	console.log(authContext); // Check the value in the console

	// Ensure a default value is provided if authContext is undefined
	const { auth = {}, setAuth } = authContext || {};
	const { isReg } = auth;

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const reset = () => {
	  setEmail("");
	  setPassword("");
	};

	const signinReq = async () => {
	  try {
		const res = await axios.post("/api/user/signin", {
		  email,
		  password,
		});

		console.log(res.data);

		if (res.data) {
		  setAuth({ ...auth, isAuth: res.data });
		  reset();
		  router.push("/");
		}
	  } catch (error) {
		console.error("Error during sign-in", error);
	  }
	};

	useEffect(() => {
	  if (isReg) setEmail(isReg.email);
	}, [isReg]);


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
			<Input
			  onClick={() => signinReq()}
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
        </VStack>
      </VStack>
    </Flex>
	</Box>
	);
  };

  export default Signin;
