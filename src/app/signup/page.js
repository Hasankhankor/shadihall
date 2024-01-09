// Import necessary modules and components
"use client"
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

const Signup = () => {
  const router = useRouter();
  const authContext = useContext(AuthContext);
  const { setAuth } = authContext || {};

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const reset = () => {
    setEmail("");
    setPassword("");
  };

  const signupReq = async () => {
    try {
      const res = await axios.post("http://192.168.18.125:5000/api/user/signup", {
        email: email,
        password: password,
      });

      console.log(res.data);

      if (res.data) {
        localStorage.setItem("email", true);
        localStorage.setItem("email2", email);
        reset();
        router.push("/signin"); // Redirect to the signin page after successful signup
      } else {
        console.error("No token received in the response");
      }
    } catch (error) {
      console.error("Error during sign-up", error);
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


        <VStack w="90%" m="auto" mt="50px">
          <Heading
            mb="24px"
            as="h1"
            fontSize="40px"
            color="#003B95"
            textAlign="center"
          >
            Create an Account
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
              <Link to="/sigin">
  <Input
    onClick={() => signupReq()}
    mb="15px"
    fontSize="14px"
    color="blue "
    type="submit"
    cursor="pointer"
    value="Sign Up"
    bg="#003B95"
    fontWeight="500"
    _hover={{ bg: "#265cad" }}
  />
</Link>
            </FormControl>

            <Text mb="16px !important" textAlign="center">
              By signing up, you agree with our{" "}
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
              Already have an account?{" "}
              <Link
                href="/signin"
                textDecoration="underline"
                fontWeight="bold"
                color="blackAlpha.800"
              >
                Sign in here!
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

export default Signup;
