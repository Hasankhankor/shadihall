import React, { useEffect, useState } from 'react'
import Link from "next/link";
import axios from "axios";

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
const Topcard = () => {
	const [hallData, sethallData] = useState([])

	useEffect(() => {
		const fetchAPI = async () => {
		  try {
			const response = await axios.get("http://192.168.100.107:5000/api/user/halls");
			console.log(response.data);
			sethallData(response.data);
		  } catch (error) {
			console.error('Error fetching data from API:', error.message);

		  }
		};

		fetchAPI();
	  }, []);


  return (
    <div>
      <>
      <Flex
      direction={{ base: "column", md: "row" }}
      justifyContent="center"
      alignItems="center"
      flexWrap="wrap"
    >
		{hallData.map((item)=>{
			return(
				<Card key={item._id}   maxW="sm" mr="4" sx={cardHoverStyle}>
      <CardBody>
        <Image
          src="https://image-tc.galaxy.tf/wijpeg-5h8z45mlagjtfm1n4jsszvcqe/whatsapp-image-2021-01-25-at-3.jpg?width=1600&height=1066"
          alt="Green double couch with wooden legs"
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">{item.hallname}</Heading>
          <Text>
           {item.halldescription}
          </Text>
          <Text color="blue.600" fontSize="2xl">
            {item.hallprice}
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
            color={"blue"}
            variant="solid"
            colorScheme="blue"
            alignItems="center"
            _hover={{ bg: "blue.500", color: "white" }}
			onClick={()=>{
				localStorage.setItem("cardId",item._id)
			}}
          >
            <Link href="/WeddingHall" style={{ color: "inherit", textDecoration: "inherit" }}>
              Book Now
            </Link>
          </Button>
          <Button variant="ghost" colorScheme="blue">
            Add to list
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>

			)
		})}

				{/* <Card maxW="sm" mr="4" sx={cardHoverStyle}>
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
						color={"blue"}
    variant="solid"
    colorScheme="blue"
    alignItems="center"
    _hover={{ bg: 'blue.500', color: 'white' }}
>
    <Link href="/WeddingHall" style={{ color: 'inherit', textDecoration: 'inherit' }}>
        Book Now
    </Link>
</Button>
<Button variant="ghost" colorScheme="blue">
								Add to list
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
						color={"blue"}
    variant="solid"
    colorScheme="blue"
    alignItems="center"
    _hover={{ bg: 'blue.500', color: 'white' }}
>
    <Link href="/WeddingHall" style={{ color: 'inherit', textDecoration: 'inherit' }}>
        Book Now
    </Link>
</Button>
<Button variant="ghost" colorScheme="blue">
								Add to list
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
						color={"blue"}
    variant="solid"
    colorScheme="blue"
    alignItems="center"
    _hover={{ bg: 'blue.500', color: 'white' }}
>
    <Link href="/WeddingHall" style={{ color: 'inherit', textDecoration: 'inherit' }}>
        Book Now
    </Link>
</Button>
							<Button variant="ghost" colorScheme="blue">
								Add to list
							</Button>
						</ButtonGroup>
					</CardFooter>
				</Card> */}
			</Flex>
      </>
    </div>
  )
}

export default Topcard
