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

import Topcard from "@/Components/topcard";
import DownCard from "@/Components/downcard";
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
				<h2 style={{ textAlign: "center", color: "blue" }}>Top Wedding Halls</h2>
				<Spacer y={10} />
				<Topcard/>
				<h2 style={{ textAlign: "center", color: "blue" }}> Under budget Wedding Halls</h2>
				<Spacer y={2} />
				<Topcard/>
				<h2 style={{ textAlign: "center", color: "blue" }}> Wedding Halls</h2>
				<Spacer y={2} />
				<DownCard/>
				<Spacer y={2} />
			</div>
		</>
	);
}

export default flights;
