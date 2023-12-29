import BgComponent from "../components/backgroundImg/bgComponent";
import { Slideshow } from "../components/explore/slideShow";
import SearchBox from "../components/searchBox/searchBox";
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
import { Nextrip } from "../components/explore/nextTrip";
import ConnectWithtravellers from "../components/explore/connectTravellers";
import Navbar from "../components/navbarSection/navbar";
import { Rating, RatingStar } from "flowbite-react";

import Hero2SVG from "../components/Hero2SVG";
import SwiperComponent from "../components/swiper";
import WeddingHall from "../pages/WeddingHall";
import Link from "next/link";
import { Spacer } from "@nextui-org/spacer";

const cardHoverStyle = {
	transition: "transform 0.2s ease-in-out",
	"&:hover": {
		transform: "scale(1.19)",
	},
};

function Stay() {
	// { slideImages, slide, travel, stay }
	// console.log(travel);

	return (
		<>
			<Navbar />

			<BgComponent heading="" subHeading="Easy Booking, Easy Living" />

			<SearchBox />
			<Hero2SVG />
			<Spacer y={10} />

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
							<Heading size="md">ISLAMABAD SERENA HOTEL WEDDING VENUE</Heading>
							<Text>
								The 5-star Islamabad Serena Hotel is Islamabad’s most
								sophisticated address for an unforgettable wedding celebration.
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
								<Link href="/WeddingHall">Book Now</Link>
							</Button>
						</ButtonGroup>
					</CardFooter>
				</Card>
				<Card maxW="sm" mr="4" sx={cardHoverStyle}>
					<CardBody>
						<Image
							src="https://cdn0.weddingwire.in/vendor/8084/3_2/960/jpg/11811381-730712030366497-1932142983309670430-n_15_8084.jpeg"
							alt="Green double couch with wooden legs"
							borderRadius="lg"
						/>
						<Stack mt="6" spacing="3">
							<Heading size="md">The Mark</Heading>
							<Text>
								With our timeless venues, we offer an array of banquet settings
								to suit every love story. Experience the perfect wedding day in
								one of our privileged venues and trust a brand you can count on
								to manage every detail.
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
								Book Now
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
							src="https://shadiyana-vendor-images.s3.ap-south-1.amazonaws.com/venues/twin-cities/White-Rose/1.webp"
							alt="Green double couch with wooden legs"
							borderRadius="lg"
						/>
						<Stack mt="6" spacing="3">
							<Heading size="md">White Rose</Heading>
							<Text>
								White Rose Marquee, an elegant vintage themed event space and
								your ideal location for weddings, engagement parties, corporate
								events, bridal and baby showers, anniversaries, birthday parties
								and more.
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
								Book Now
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
							src="https://hall.pk/wp-content/uploads/2020/09/103.jpg"
							alt="Green double couch with wooden legs"
							borderRadius="lg"
						/>
						<Stack mt="6" spacing="3">
							<Heading size="md">The Monal Marquee</Heading>
							<Text>
								The Monal Marquee is a popular event venue located in
								Rawalpindi, Pakistan. The venue is known for its beautiful
								mountainous views and stunning natural surroundings, as well as
								its high-quality catering and event management services.
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
								Book Now
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

			<div style={{ position: "relative" }}>
				<Image
					src="/Black & Yellow Modern Black Friday Sale Outdoor Banner.png"
					alt="travel Image"
					width={1900}
					height={600}
				/>
				<button
					style={{
						position: "absolute",
						bottom: "11%",
						left: "23%",
						transform: "translate(-50%, -50%)",
						background: "white ",
						color: "blue",
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
								Book Now
							</Button>
						</ButtonGroup>
					</CardFooter>
				</Card>
				<Card maxW="sm" mr="4">
					<CardBody>
						<Image
							src="https://hall.pk/wp-content/uploads/2020/09/103.jpg"
							alt="Green double couch with wooden legs"
							borderRadius="lg"
						/>
						<Stack mt="6" spacing="3">
							<Heading size="md">Monal Marquee</Heading>
							<Text>
								The Monal Marquee is a popular event venue located in
								Rawalpindi, Pakistan. The venue is known for its beautiful
								mountainous views and stunning natural surroundings
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
								Book Now
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
								PKR - 45550
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
								Book Now
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
								PKR - 45550
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
								Book Now
							</Button>
							<Button variant="ghost" colorScheme="blue">
								Add to cart
							</Button>
						</ButtonGroup>
					</CardFooter>
				</Card>
			</Flex>
			<SwiperComponent />
		</>
	);
}

export default Stay;

//we can use this if we want to use data from deployed server

// export const getStaticProps = async () => {
//   const res1 = await fetch(
//     "https://web-database-pravin.onrender.com/slideImages"
//   );

//   const dataSlideImage = await res1.json();

//   const res2 = await fetch("https://web-database-pravin.onrender.com/slide");

//   const dataSlide = await res2.json();

//   const res3 = await fetch("https://web-database-pravin.onrender.com/travel");

//   const dataTravel = await res3.json();

//   const res4 = await fetch("https://web-database-pravin.onrender.com/stay");

//   const dataStay = await res4.json();

//   return {
//     props: {
//       slideImages: dataSlideImage,
//       slide: dataSlide,
//       travel: dataTravel,
//       stay: dataStay,
//     },
//   };
// };
