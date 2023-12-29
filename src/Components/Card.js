import { Flex } from "@chakra-ui/react";
import React from "react";
// import { Card, CardBody, Button, ButtonGroup, Divider, Heading, Image, Stack, Text,RatingStar, Rating,CardFooter,Cards } from '@chakra-ui/react';
import {
	Card,
	CardBody,
	Button,
	ButtonGroup,
	Divider,
	Heading,
	Image,
	Stack,
	Text,
	RatingStar,
	Rating,
	CardFooter,
	Cards,
} from "@chakra-ui/react";

const Cardop = () => {
	return (
		<>
			<Flex justifyContent="center" alignItems="center">
				<Card maxW="sm" mr="4">
					<CardBody>
						<Image
							src="https://image-tc.galaxy.tf/wijpeg-5h8z45mlagjtfm1n4jsszvcqe/whatsapp-image-2021-01-25-at-3.jpg?width=1600&height=1066"
							alt="Green double couch with wooden legs"
							borderRadius="lg"
						/>
						<Stack mt="6" spacing="3">
							<Heading size="md">ISLAMABAD SERENA HOTEL WEDDING VENUE</Heading>
							<Text>
								The 5-star Islamabad Serena Hotel is Islamabad’s most
								sophisticated address for an unforgettable wedding celebration.
							</Text>
							<Text color="blue.600" fontSize="2xl">
								PKR-45550
							</Text>
						</Stack>
						<Rating style={{ display: "flex", alignItems: "center" }}>
							<RatingStar style={{ color: "orange" }} />
							<RatingStar style={{ color: "orange" }} />
							<RatingStar style={{ color: "orange" }} />
							<RatingStar style={{ color: "orange" }} />
							<RatingStar filled={false} style={{ color: "orange" }} />
							<p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">
								4.95 out of 5
							</p>
						</Rating>
					</CardBody>
					<Divider />
					<CardFooter>
						<ButtonGroup spacing="2">
							<Button
								variant="solid"
								colorScheme="#195bb4"
								bg="#195bb4"
								alignItems="center"
							>
								Book Now
							</Button>
						</ButtonGroup>
					</CardFooter>
				</Card>
				<Card maxW="sm" mr="4">
					<CardBody>
						<Image
							src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
							alt="Green double couch with wooden legs"
							borderRadius="lg"
						/>
						<Stack mt="6" spacing="3">
							<Heading size="md">Living room Sofaxxx</Heading>
							<Text>
								This sofa is perfect for modern tropical spaces, baroque
								inspired spaces, earthy toned spaces and for people who love a
								chic design with a sprinkle of vintage design.
							</Text>
							<Text color="blue.600" fontSize="2xl">
								$450
							</Text>
						</Stack>
					</CardBody>
					<Divider />
					<CardFooter>
						<ButtonGroup spacing="2">
							<Button
								variant="solid"
								colorScheme="#195bb4"
								bg="#195bb4"
								alignItems="center"
							>
								Buy now
							</Button>
							<Button variant="ghost" colorScheme="blue">
								Add to cart
							</Button>
						</ButtonGroup>
					</CardFooter>
				</Card>
				<Card maxW="sm" mr="4">
					<CardBody>
						<Image
							src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
							alt="Green double couch with wooden legs"
							borderRadius="lg"
						/>
						<Stack mt="6" spacing="3">
							<Heading size="md">Living room Sofa</Heading>
							<Text>
								This sofa is perfect for modern tropical spaces, baroque
								inspired spaces, earthy toned spaces and for people who love a
								chic design with a sprinkle of vintage design.
							</Text>
							<Text color="blue.600" fontSize="2xl">
								$450
							</Text>
						</Stack>
					</CardBody>
					<Divider />
					<CardFooter>
						<ButtonGroup spacing="2">
							<Button variant="solid" colorScheme="blue">
								Buy now
							</Button>
							<Button variant="ghost" colorScheme="blue">
								Add to cart
							</Button>
						</ButtonGroup>
					</CardFooter>
				</Card>
S
				<Card maxW="sm" mr="4">
					<CardBody>
						<Image
							src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
							alt="Green double couch with wooden legs"
							borderRadius="lg"
						/>
						<Stack mt="6" spacing="3">
							<Heading size="md">Living room Sofa</Heading>
							<Text>
								This sofa is perfect for modern tropical spaces, baroque
								inspired spaces, earthy toned spaces and for people who love a
								chic design with a sprinkle of vintage design.
							</Text>
							<Text color="blue.600" fontSize="2xl">
								$450
							</Text>
						</Stack>
					</CardBody>
					<Divider />
					<CardFooter>
						<ButtonGroup spacing="2">
							<Button
								variant="solid"
								colorScheme="#195bb4"
								bg="#195bb4"
								alignItems="center"
							>
								Buy now
							</Button>
							<Button variant="ghost" colorScheme="blue">
								Add to cart
							</Button>
						</ButtonGroup>
					</CardFooter>
				</Card>
			</Flex>
		</>
	);
};

export default Cardop;
