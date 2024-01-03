"use client";
import BgComponent from "../Components/backgroundimg/bgComponent";

import SearchBox from "../Components/serachBox/searchBox";
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
import { Nextrip } from "../Components/explore/nextTrip";
import Topcard from "@/Components/topcard";
import Downcard from "@/Components/downcard";
// import Navbar from "../Components/navbarSection/navbar";
import { Rating, RatingStar } from "flowbite-react";

import Hero2SVG from "../Components/Hero2SVG";
import SwiperComponent from "../Components/swiper";

import Link from "next/link";
import { Spacer } from "@nextui-org/spacer";
import Head from "next/head";
import Script from "next/script";
import Navbarr from "@/Components/navbarSection/navbar";
import Footer from "@/Components/Footer";
import LogPage from "@/Components/wedlogs";

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

			<Navbarr />
			<Script src="https://cdn.tailwindcss.com" />
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
        <Topcard/>
			<br />
			<br />
			<br />
			<br />

			<div style={{ position: 'relative' }}>
      <Image
        src="/Black & Yellow Modern Black Friday Sale Outdoor Banner.png"
        alt="Travel Image"
        width={2900} // Set the desired width
        height={900} // Set the desired height
        layout="responsive" // Set layout to responsive
      />
      <button
        style={{
          position: 'absolute',
          bottom: '5%', // Adjusted the bottom position
          left: '50%',
          transform: 'translateX(-50%)', // Simplified the transform for centering
          background: 'white',
          color: 'blue',
          padding: '10px 32px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          fontWeight: 'bold',
          boxShadow: '0 0 10px 3px rgba(0, 0, 255, 0.5)',
          transition: 'box-shadow 0.2s ease-in-out',
        }}
        onMouseEnter={(e) => {
          e.target.style.boxShadow = '0 0 50px 5px rgba(180, 180, 180)';
        }}
        onMouseLeave={(e) => {
          e.target.style.boxShadow = '0 0 10px 3px rgba(180, 180, 180)';
        }}
      >
        Book Now
      </button>
    </div>
			<Spacer y={20} />
			<h2
				style={{
					fontWeight: "bold",
					color: "#003580",
					fontSize: "42px",
					textAlign: "center",
				}}
			>
				Top in low budget Wedding Halls In Islamabad
			</h2>
           <Downcard/>
		   <Spacer y={20} />
			<LogPage/>
			<Spacer y={20} />
			<SwiperComponent />
      <Footer/>
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
