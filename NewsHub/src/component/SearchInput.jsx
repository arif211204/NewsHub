/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import {
  Input,
  InputGroup,
  InputRightElement,
  IconButton,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

import { fetchArticles } from "../utils/api";

const SearchInput = ({ setSearchResults }) => {
  const [searchTerm, setSearchTerm] = useState("");

  // const handleSearch = async () => {
  //   try {
  //     const data = await fetchArticles(searchTerm);
  //     setSearchResults(data);
  //     console.log(data, "satasearch");
  //   } catch (error) {
  //     console.error("Error fetching articles:", error);
  //   }
  // };

  return (
    <InputGroup mb={4} w="50%">
      <Input
        marginLeft={10}
        placeholder="Search news..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        bg="white"
        border="1px solid #CBD5E0"
        color={"black"}
        borderRadius="md"
        _hover={{
          borderColor: "#CBD5E0",
        }}
        _focus={{
          borderColor: "#CBD5E0",
          boxShadow: "0 0 0 2px #CBD5E0",
        }}
      />

      <InputRightElement width="4.5rem">
        <IconButton aria-label="Search database" icon={<SearchIcon />} />
      </InputRightElement>
    </InputGroup>
  );
};

export default SearchInput;
