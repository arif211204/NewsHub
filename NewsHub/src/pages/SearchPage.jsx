import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { fetchArticlesByTitle } from "../utils/api";
import {
  Box,
  Heading,
  List,
  ListItem,
  Text,
  Image,
  Button,
} from "@chakra-ui/react";
import Navbar from "../component/navbar";

const SearchPage = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [articlesPerPage] = useState(5);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchTerm = queryParams.get("q");

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const data = await fetchArticlesByTitle(searchTerm);
        setSearchResults(data);
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    };

    if (searchTerm) {
      fetchSearchResults();
    }
  }, [searchTerm]);

  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = searchResults.slice(
    indexOfFirstArticle,
    indexOfLastArticle
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <Navbar />
      <Box maxW="800px" mx="auto" p="20px">
        <Heading as="h2" fontSize="xl" mb="10px">
          Search Results for "{searchTerm}"
        </Heading>
        <List spacing={3}>
          {currentArticles.map((article) => (
            <ListItem key={article.url} display="flex" alignItems="flex-start">
              <Image
                src={article.urlToImage}
                alt={article.title}
                w="100px"
                h="100px"
                mr="20px"
              />
              <Box flex="1">
                <Link
                  to={article.url}
                  style={{ textDecoration: "none" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Heading as="h3" fontSize="lg" mb="5px" color="blue.500">
                    {article.title}
                  </Heading>
                </Link>
                <Text fontSize="md" color="gray.600">
                  {article.description}
                </Text>
              </Box>
            </ListItem>
          ))}
        </List>
        <Box mt="20px" textAlign="center">
          {[
            ...Array(Math.ceil(searchResults.length / articlesPerPage)).keys(),
          ].map((number) => (
            <Button
              key={number}
              variant="outline"
              mx="2"
              onClick={() => paginate(number + 1)}
            >
              {number + 1}
            </Button>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default SearchPage;
