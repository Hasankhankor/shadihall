import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  VStack,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import Link from "next/link"; // Add the import for Link
import { useState } from "react";

import { BsSearch } from "react-icons/bs";
import Datepicker from "./DatePicker";

const SearchForm = () => {

  const [inputData , setInputData] = useState("");

  return (
    <Box p="17px 15px" bg="#FEBB02">
      <Text fontSize="20px" fontWeight="bold">
        Search
      </Text>
      <FormControl>
        <FormLabel fontSize="13px">Destination/property name:</FormLabel>
        <InputGroup bg="white" borderRadius="6px" mb="10px">
        <InputLeftElement pointerEvents="none">
  <BsSearch />
</InputLeftElement>
          <Input onChange={({target}) => setInputData(target.value)} type="text" placeholder="Where are you going" />
        </InputGroup>
        <FormLabel fontSize="13px">Check-in - Check-out</FormLabel>
        <Datepicker />
        <NumberInput mt="10px" min={0} max={20} bg="white" mb="10px" borderRadius="6px">
          <NumberInputField placeholder="Number of guests" />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>

        <VStack alignItems="flex-start" mb="10px">
          <Checkbox>Entire homes & apartments</Checkbox>
          <Checkbox>Im travelling for work</Checkbox>
        </VStack>

        {/* Fix the href attribute with template string */}
        <Link href={`/property?city=${inputData}`} passHref>
          <Button w="100%" h="50px" type="submit" colorScheme="blue">
            Search
          </Button>
        </Link>
      </FormControl>
    </Box>
  );
};

export default SearchForm;