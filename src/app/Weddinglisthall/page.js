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
import WeddingHall from "../../app/WeddingHall/page";

function flights() {
	const stay = [];
	const cardHoverStyle = {
		transition: "transform 0.2s ease-in-out",
		"&:hover": {
			transform: "scale(1.19)",
		},
	};

	return (
		<>
			<div>
				<Navbar />
				<SearchBox />
				<h2
					style={{
						fontWeight: "bold",
						color: "#003580",
						fontSize: "42px",
						textAlign: "center",
					}}
				>
					Top Wedding Halls In Islamabad
				</h2>
				<Flex justifyContent="center" alignItems="center">
					<Card maxW="sm" mr="4" sx={cardHoverStyle}>
						<CardBody>
							<Image
								src="https://image-tc.galaxy.tf/wijpeg-5h8z45mlagjtfm1n4jsszvcqe/whatsapp-image-2021-01-25-at-3.jpg?width=1600&height=1066"
								alt="Green double couch with wooden legs"
								borderRadius="lg"
							/>
							<Stack mt="6" spacing="3">
								<Heading size="md">
									ISLAMABAD SERENA HOTEL WEDDING VENUE
								</Heading>
								<Text>
									The 5-star Islamabad Serena Hotel is Islamabad’s most
									sophisticated address for an unforgettable wedding
									celebration.
								</Text>
								<Text color="blue.600" fontSize="2xl">
									PKR - 45550
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
									{/* <Link href="/WeddingHall">
            Book Now
            </Link> */}
									Book Now
								</Button>
							</ButtonGroup>
						</CardFooter>
					</Card>
				</Flex>
				<Spacer y={2} />
			</div>
		</>
	);
}

export default flights;
