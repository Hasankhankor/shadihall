import { useState, useEffect } from "react";
import NextLink from 'next/link';
import {
  Box,
  Text,
  Image,
  Flex,
  Link,
  HStack,
  Center,
} from "@chakra-ui/react";
import { AiFillStar, AiFillLike } from "react-icons/ai";
import { BsHeart } from "react-icons/bs";
import LoadingScreen from "./pre_loader/loadingScreen";

const SearchCard = ({
  id,
  title,
  TravelText,
  TravelText1,
  TravelText2_o,
  TravelText_2,
  TravelText2,
  price,
  reviews,
  rating,
  ratingStatus,
  imagescr,
  city,
}) => {

  const [loading, setLoading] = useState(false);

  useEffect(() => {
      setLoading(true);
  }, []);

  return (
    <>
      <div>
        {loading ? (
          <Flex
            key={id}
            w="100%"
            p="15px"
            border="1px solid #C6C6C6"
            gap="10px"
            justifyContent={"space-between"}
            flexDirection={["column", "column", "column", "row", "row"]}
          >
            <Flex
              gap="10px"
              flexDirection={["column", "column", "column", "row", "row"]}
            >
              <Box position="relative" minW="200px" h="200px">
                <Link as={NextLink} href={`/property/${id}`} passHref>
                  <Image
                    w="100%"
                    h="100%"
                    src={imagescr}
                  />
                </Link>
                <Box w="30px" h="30px" position="absolute" top="10px" right="0px">
                  <BsHeart className="image_icon" fontSize="20px" />
                </Box>
              </Box>
              <Flex flexDirection="column" gap="5px">
                <Flex alignItems={"center"}>
                  <Text
                    mr="10px"
                    fontWeight={"bold"}
                    color="blackAlpha.700"
                    fontSize={"20px"}
                  >
                    {title}
                  </Text>
                  <AiFillStar color="#FEBB02" />
                  <AiFillStar color="#FEBB02" />
                  <AiFillLike color="#FEBB02" />
                </Flex>

                <HStack fontSize="12px">
                  <Link color="#007BD2" textDecoration={"underline"}>
                    {city}
                  </Link>
                  <Link color="#007BD2" textDecoration={"underline"}>
                    Show on map
                  </Link>
                  <Text>
                    {TravelText ? TravelText : ""}
                  </Text>
                </HStack>

                <Text fontSize="14px">
                  {TravelText1 ? TravelText1 : ""}
                  {TravelText2 ? TravelText2 : ""}
                  {TravelText2_o ? TravelText2_o : ""}
                  {TravelText_2 ? TravelText_2 : ""}
                </Text>
              </Flex>
            </Flex>

            <Flex flexDirection={"column"} gap="10px">
              <Flex fontWeight={"bold"} justifyContent={"space-between"} alignItems="center" gap="10px">
                <Flex flexDirection={"column"}>
                  <Text>{ratingStatus}</Text>
                  <Text color="blackAlpha.700" fontSize={"12px"}>
                    {reviews ? reviews : 0} reviews
                  </Text>
                </Flex>
                <Center
                  p='5px'
                  w="30px"
                  h="30px"
                  bg="#003580"
                  borderRadius={"4px"}
                  borderBottomLeftRadius="0px"
                  color="white"
                >
                  {rating}
                </Center>
              </Flex>
              <Text fontWeight="bold">Price/day ₹ {price}</Text>
            </Flex>
          </Flex>
        ) : (
          <LoadingScreen />
        )}
      </div>
    </>
  );
};

export default SearchCard;
