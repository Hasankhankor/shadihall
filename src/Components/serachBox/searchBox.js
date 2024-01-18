import {
	Box,
	Input,
	InputGroup,
	InputLeftElement,
	Text,
	Button,
	Popover,
	PopoverTrigger,
	PopoverContent,
	PopoverHeader,
	PopoverBody,
	PopoverArrow,
	PopoverCloseButton,
	Portal,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { useContext, useState } from "react";
import DatePicker from "../DatePicker";
import Link from "next/link";
import { GuestContext } from "../../context/GuestContext";

const SearchBox = () => {
	const [inputData, setInputData] = useState("");
	return (
		<>
			<Box
				width={"100%"}
				backgroundColor={"#041c4c"}
				//  height={"200px"}
				height={{
					base: "150px",
					sm: "160px",
					md: "200px",
					lg: "200px",
					xl: "200px",
					"2xl": "200px",
				}}
				//  border={{ base:"8px solid red", sm:'5px solid green', md: '2px solid teal', lg: '2px solid black' , xl:'3px solid red' , '2xl':'4px solid grey' }}
				pt="35px"
			>
				<Box width={"95%"} margin={"auto"}>
					<Text
						color={"white"}
						fontSize={["20px", "25px", "30px", "45px"]}
						textAlign={"center"}
						fontWeight="bold"
					>
						Find Best Deal On Halls
					</Text>
					<Text
						color={"white"}
						fontSize={["12px", "15px", "18px", "22px"]}
						textAlign={"center"}
					>
						Search Low Prices On Halls, Destination And Much More...
					</Text>
				</Box>
			</Box>

			<Box
				display="flex"
				justifyContent="center"
				alignItems="center"
				height="20vh" // Adjust the height as needed
				width="100%" // Adjust the width as needed
			>


			</Box>
		</>
	);
};
export default SearchBox;

function Pop() {
	const {
		adult,
		handleIncre,
		handledec,
		childrens,
		handlechildrenIncre,
		handlechildrenDec,
		room,
		handleroomIncre,
		handleroomDec,
	} = useContext(GuestContext);

	return (
		<Popover>
			<PopoverTrigger>
				<Box
					display={{
						base: "none",
						sm: "none",
						md: "flex",
						lg: "flex",
						xl: "true",
						"2xl": "flext",
					}}
					w="auto"
					justifyContent={"space-evenly"}
					alignItems="center"
					textAlign={"center"}
					borderRight={"4px solid #febb02"}
					gap="10px"
				>
					<Text mt="0 !important">{adult} adults</Text>
					<Text mt="0 !important">{childrens} children</Text>
					<Text mt="0 !important">{room} rooms</Text>
				</Box>
			</PopoverTrigger>
			<Portal>
				<PopoverContent>
					<PopoverArrow />
					<PopoverHeader color={"white"}>Header</PopoverHeader>
					<PopoverCloseButton />
					<PopoverBody display={"flex"} justifyContent={"space-around"}>
						<Text width={"40%"}>Adult</Text>
						<Button
							disabled={adult === 0}
							onClick={handledec}
							border={"1px solid blue"}
							color={"black"}
						>
							-
						</Button>
						<Text marginTop={"5px"}>{adult}</Text>
						<Button
							onClick={handleIncre}
							border={"1px solid blue"}
							color={"black"}
						>
							+
						</Button>
					</PopoverBody>
					<PopoverBody display={"flex"} justifyContent={"space-around"}>
						<Text width={"40%"}>Children</Text>
						<Button
							disabled={childrens === 0}
							onClick={handlechildrenDec}
							border={"1px solid blue"}
							color={"black"}
						>
							-
						</Button>
						<Text marginTop={"5px"}>{childrens}</Text>
						<Button
							onClick={handlechildrenIncre}
							border={"1px solid blue"}
							color={"black"}
						>
							+
						</Button>
					</PopoverBody>
					<PopoverBody display={"flex"} justifyContent={"space-around"}>
						<Text width={"40%"}>Room</Text>
						<Button
							disabled={room === 0}
							onClick={handleroomDec}
							border={"1px solid blue"}
							color={"black"}
						>
							-
						</Button>
						<Text marginTop={"5px"}>{room}</Text>
						<Button
							onClick={handleroomIncre}
							border={"1px solid blue"}
							color={"black"}
						>
							+
						</Button>
					</PopoverBody>
				</PopoverContent>

			</Portal>

		</Popover>
	);
}
