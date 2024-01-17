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

const cardHoverStyle = {
	transition: "transform 0.2s ease-in-out",
	"&:hover": {
		transform: "scale(1.19)",
	},
};
function carRental() {
	return (
		<div>
			<Navbar />
			<SearchBox />
			<h2 style={{ textAlign: "center", color: "blue" }}>Top Bridel Cars </h2>

			<Flex justifyContent="center" alignItems="center">
				<Card maxW="sm" mr="4" sx={cardHoverStyle}>
					<CardBody>
						<Image
							src="https://miro.medium.com/v2/resize:fit:940/1*9VAnfAZ6o0s8O_A1nWvDsg.png"
							alt="Green double couch with wooden legs"
							borderRadius="lg"
						/>
						<Stack mt="6" spacing="3">
							<Heading size="md">ISLAMABAD Car Rental </Heading>
							<Text>
								Going to the capital for the first time and want to see the city
								from Margalla hills? safe and comfortable car rental service.
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
							<Button variant="solid" colorScheme="blue" alignItems="center">
								Book Now
							</Button>
						</ButtonGroup>
					</CardFooter>
				</Card>

				<Card maxW="sm" mr="4" sx={cardHoverStyle}>
					<CardBody>
						<Image
							src="https://rentacarict.pk/wp-content/uploads/2023/03/Car-Rental-Banner-Cover-2-min.jpg"
							alt="Green double couch with wooden legs"
							borderRadius="lg"
						/>
						<Stack mt="6" spacing="3">
							<Heading size="md">Hamdan Rent Car</Heading>
							<Text>
								We have all luxury vehicles like Civic Facelift, Vigo, Limo, Ac
								Coaster, Wagoner Car, BRV Car, 500 more than Fleet service in
								all over Pakistan. Hamdan car rental services in Islamabad
								providing the best tour service in the Northern areas of
								Pakistan.
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
				<Card maxW="sm" mr="4" sx={cardHoverStyle}>
					<CardBody>
						<Image
							src="https://www.omegarentalcars.com/assets/Uploads/range.jpg"
							alt="Green double couch with wooden legs"
							borderRadius="lg"
						/>
						<Stack mt="6" spacing="3">
							<Heading size="md">Micro Rent Car Islamabad</Heading>
							<Text>
								A Best rent a cars services here. All kinds of vehicles are
								available with low rent. At Luxury Rent a Car, we understand the
								importance of convenience and flexibility in travel Our diverse
								fleet of well-maintained and luxurious vehicles awaits to cater
								to your every desire.
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

				<Card maxW="sm" mr="4" sx={cardHoverStyle}>
					<CardBody>
						<Image
							src="https://sherbrotherpakistan.com/wp-content/uploads/2023/02/intercity-car-service-1024x576.png"
							alt="Green double couch with wooden legs"
							borderRadius="lg"
						/>
						<Stack mt="6" spacing="3">
							<Heading size="md">Islamabad To Lahore </Heading>
							<Text>
								Are you looking for a seamless and luxurious journey from Rent a
								Car Islamabad to Lahore? Look no further than our prestigious
								one-way drop service.
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
			</Flex>
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<div style={{ position: "relative" }}>
				<Image
					src="/Modern Car Rental Promotion Banner.png"
					alt="travel Image"
					width={2600}
					height={800}
				/>
				<button
					style={{
						position: "absolute",
						bottom: "11%",
						left: "53%",
						transform: "translate(-50%, -50%)",
						background: "#195bb4 ",
						color: "white",
						padding: "10px 32px",
						border: "none",
						borderRadius: "5px",
						cursor: "pointer",
						fontWeight: "bold",
						boxShadow: "0 0 10px 3px rgba(0, 0, 255, 0.5)", // Box shadow for the glow effect
						transition: "box-shadow 0.2s ease-in-out", // Transition for smooth effect
					}}
					onMouseEnter={(e) => {
						e.target.style.boxShadow = "0 0 50px 5px rgba(180, 180, 180)"; // Adjusted glow on hover
					}}
					onMouseLeave={(e) => {
						e.target.style.boxShadow = "0 0 10px 3px rgba(180, 180, 180)";
					}}
				>
					Book Now
				</button>
			</div>

			<br />
			<br />
			<h2 style={{ textAlign: "center", color: "blue" }}>Under budget Bridel Cars </h2>
			<br />
			<Flex justifyContent="center" alignItems="center">
				<Card maxW="sm" mr="4" sx={cardHoverStyle}>
					<CardBody>
						<Image
							src="https://miro.medium.com/v2/resize:fit:940/1*9VAnfAZ6o0s8O_A1nWvDsg.png"
							alt="Green double couch with wooden legs"
							borderRadius="lg"
						/>
						<Stack mt="6" spacing="3">
							<Heading size="md">ISLAMABAD Car Rental </Heading>
							<Text>
								Going to the capital for the first time and want to see the city
								from Margalla hills? safe and comfortable car rental service.
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
							<Button variant="solid" colorScheme="blue" alignItems="center">
								Book Now
							</Button>
						</ButtonGroup>
					</CardFooter>
				</Card>

				<Card maxW="sm" mr="4" sx={cardHoverStyle}>
					<CardBody>
						<Image
							src="https://rentacarict.pk/wp-content/uploads/2023/03/Car-Rental-Banner-Cover-2-min.jpg"
							alt="Green double couch with wooden legs"
							borderRadius="lg"
						/>
						<Stack mt="6" spacing="3">
							<Heading size="md">Hamdan Rent Car</Heading>
							<Text>
								We have all luxury vehicles like Civic Facelift, Vigo, Limo, Ac
								Coaster, Wagoner Car, BRV Car, 500 more than Fleet service in
								all over Pakistan. Hamdan car rental services in Islamabad
								providing the best tour service in the Northern areas of
								Pakistan.
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
				<Card maxW="sm" mr="4" sx={cardHoverStyle}>
					<CardBody>
						<Image
							src="https://www.omegarentalcars.com/assets/Uploads/range.jpg"
							alt="Green double couch with wooden legs"
							borderRadius="lg"
						/>
						<Stack mt="6" spacing="3">
							<Heading size="md">Micro Rent Car Islamabad</Heading>
							<Text>
								A Best rent a cars services here. All kinds of vehicles are
								available with low rent. At Luxury Rent a Car, we understand the
								importance of convenience and flexibility in travel Our diverse
								fleet of well-maintained and luxurious vehicles awaits to cater
								to your every desire.
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

				<Card maxW="sm" mr="4" sx={cardHoverStyle}>
					<CardBody>
						<Image
							src="https://sherbrotherpakistan.com/wp-content/uploads/2023/02/intercity-car-service-1024x576.png"
							alt="Green double couch with wooden legs"
							borderRadius="lg"
						/>
						<Stack mt="6" spacing="3">
							<Heading size="md">Islamabad To Lahore </Heading>
							<Text>
								Are you looking for a seamless and luxurious journey from Rent a
								Car Islamabad to Lahore? Look no further than our prestigious
								one-way drop service.
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
			</Flex>
		</div>
	);
}

export default carRental;
