import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { CgProfile } from "react-icons/cg";
import { VscDebugRestartFrame } from "react-icons/vsc";
import { BsQuestionCircle } from "react-icons/bs";
import Link from "next/link";
import LoadingScreen from "../components/pre_loader";
import { useEffect, useState } from "react";

// ... (imports remain the same)

const ListProperty = () => {
	const [loading, setLoading] = useState(false);

	useEffect(() => {
	  setLoading(true);
	}, []);

	return (
	  <>
		{loading ? (
		  <Box bg="#f9f9fa" pb="6rem">
			<Box>
			  {/* ... (rest of your code) */}
			  <Box w="80%" m="auto">
				<Text fontSize="2xl" mb="1.5rem">
				  List your property on Booking.com and start welcoming guests in no time!
				</Text>
				<Text fontSize="md" mb="1.5rem">
				  To get started, choose the type of property you want to list on Booking.com
				</Text>

				<Box
				  m="auto"
				  w="25%"
				  p="5px"
				  mt="1rem"
				  border="1px solid gray"
				  bg="white"
				>
				  {/* ... (rest of your code) */}
				  <Flex
					alignItems="center"
					bg="green"
					color="white"
					p="5px"
					w="35%"
					flexDirection={["column", "column", "row", "row"]}
					m="auto"
					fontSize="13px"
					borderRadius="4px"
					justifyContent="space-between"
				  >
					<VscDebugRestartFrame fontSize="18px" /> Quick start
				  </Flex>
				  {/* ... (rest of your code) */}
				  <Link href="/addproperty">
					<Button
					  w="100%"
					  bg="#0071c2"
					  _hover={{ bg: "#014778" }}
					  color="white"
					  mb="15px"
					>
					  List your property
					</Button>
				  </Link>
				  <Link href="/">
					<Button
					  w="100%"
					  border="1px solid #0071c2"
					  textDecoration="none"
					  _hover={{ bg: "#b7cedf" }}
					  color="#014778"
					  mb="15px"
					>
					  Go Back
					</Button>
				  </Link>
				</Box>
			  </Box>
			  {/* <FormLabel color="blackAlpha.800" fontSize="14px">
        Upload Images
      </FormLabel>
      <Input
        type="file"
        onChange={(e) => handleImageUpload(e)}
        accept="image/*"
        multiple
      /> */}
			</Box>
		  </Box>
		) : (
		  <LoadingScreen />
		)}
	  </>
	);
  };

  export default ListProperty;