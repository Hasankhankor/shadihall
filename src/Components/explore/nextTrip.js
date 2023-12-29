import React from "react";
import { SimpleGrid, Heading, Text, Button, Box } from "@chakra-ui/react";
import styled from "@emotion/styled";

const Card = styled(Box)`
	border: 1px solid #ddd;
	padding: 16px;
`;

const CardHeader = styled(Box)`
	background-color: #f0f0f0;
	padding: 8px;
`;

const CardBody = styled(Box)`
	padding: 8px;
`;

const CardFooter = styled(Box)`
	background-color: #f0f0f0;
	padding: 8px;
`;

export const Nextrip = () => {
	return (
		<>
			<div className="div-home">
				<div className="heading-how-it">How it Works</div>
				<div className="how-it-works-webp" />
			</div>

			<SimpleGrid
				spacing={4}
				templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
			>
				<Card>
					<CardHeader>
						<Heading size="md"> Customer dashboard</Heading>
					</CardHeader>
					<CardBody>
						<Text>
							View a summary of all your customers over the last month.
						</Text>
					</CardBody>
					<CardFooter>
						<Button>View here</Button>
					</CardFooter>
				</Card>
				<Card>
					<CardHeader>
						<Heading size="md"> Customer dashboard</Heading>
					</CardHeader>
					<CardBody>
						<Text>
							View a summary of all your customers over the last month.
						</Text>
					</CardBody>
					<CardFooter>
						<Button>View here</Button>
					</CardFooter>
				</Card>
				<Card>
					<CardHeader>
						<Heading size="md"> Customer dashboard</Heading>
					</CardHeader>
					<CardBody>
						<Text>
							View a summary of all your customers over the last month.
						</Text>
					</CardBody>
					<CardFooter>
						<Button>View here</Button>
					</CardFooter>
				</Card>
			</SimpleGrid>
		</>
	);
};
