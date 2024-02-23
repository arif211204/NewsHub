/* eslint-disable react/prop-types */
/* eslint-disable react/no-children-prop */

import { Flex, Text } from "@chakra-ui/react";
import SearchInput from "./SearchInput";
const Navbar = ({ setSearchResults }) => {
  return (
    <Flex justify="space-between" p="4" bg="black" color="white">
      <Flex align="center" justifyContent={"space-around"} w="100%">
        <Text fontWeight="bold" fontSize="2xl" fontFamily="Arial, sans-serif">
          <a href="/">NewsHub</a>
        </Text>
        <SearchInput setSearchResults={setSearchResults} />
        <a href="/article">ReadList</a>
      </Flex>
    </Flex>
  );
};

export default Navbar;
