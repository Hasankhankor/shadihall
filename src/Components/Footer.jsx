import React from "react";
import { Box, Button, Grid, Image, Input, Text } from "@chakra-ui/react";

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const Footer = () => {
	return (
		<Box pb="2rem" mt={4}>
			{/* ******************footer Section 1 start******************* */}
			<Box bg="#041c4c" w="100%" p="2rem" color="white">
				<Box w="60%" m="auto" p={4}>
					<Text
						fontSize="3xl"
						lineHeight="33px"
						textAlign="center"
						color="white"
						fontWeight="300"
					>
						Save time, save money!
					</Text>
					<Text fontSize="1xl" textAlign="center" mb="10px" color="gray.300">
  Sign up and we ll send the best deals to you
</Text>
					<Grid
						templateColumns={{ sm: "repeat(1, 1fr)", lg: "repeat(2, 1fr)" }}
						m="auto"
						p={4}
						gap="10px"
					>
						<Input
							color="black"
							borderRadius="3px"
							ml={{ sm: "0px", lg: "10rem" }}
							variant="outline"
							bg="white"
							placeholder="Your email"
						/>
						<Button
							borderRadius="3px"
							m={{ sm: "auto", md: "auto" }}
							ml={{ lg: "10rem" }}
							colorScheme="messenger"
						>
							Subscribe
						</Button>
					</Grid>
				</Box>
			</Box>
			{/* ******************footer Section 1 end******************* */}
			<Box bg="#041c4c" w="100%" color="white">
				<Box p="1rem" m="auto" w="10%" mb="0.5rem">
					<Button
						borderRadius="3px"
						colorScheme="none"
						m="auto"
						border="1px solid"
						fontSize="15px"
						fontWeight="300"
					>
						List your Halls
					</Button>
				</Box>
				<Box w="100%" m="auto" p={2} borderTop="1px solid">
					<Grid
						templateColumns={{
							base: "repeat(1, 1fr)",
							sm: "repeat(2, 1fr)",
							md: "repeat(3, 1fr)",
							lg: "repeat(5, 1fr)",
						}}
						cursor="pointer"
						fontWeight="600"
						w="80%"
						fontSize="14px"
						ml="4rem"
					>
						<Text>Book Destinantion </Text>
						<Text>Manage your bookings</Text>
						<Text>Customer service help</Text>
						<Text>Become an Supporter </Text>
						<Text>Shadi.com for Business</Text>
					</Grid>
				</Box>
			</Box>

		</Box>
	);
};

export default Footer;
