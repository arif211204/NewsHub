import { useEffect, useState } from "react";
import { Box, Link, Image, Text, Flex, Skeleton, Fade } from "@chakra-ui/react";
import { fetchTopBusinessHeadlines } from "../utils/api";

const CenteredContent = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchTopBusinessHeadlines();
        setArticles(data.slice(0, 5));
        setLoading(false);
      } catch (error) {
        console.error("Error fetching top business headlines:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <Fade in>
      <Flex p={5} justifyContent="center">
        {loading ? (
          <>
            <Box mr={4}>
              <Skeleton height={120} width={200} borderRadius="md" />
            </Box>
            <Box mr={4}>
              <Skeleton height={120} width={200} borderRadius="md" />
            </Box>
            <Box mr={4}>
              <Skeleton height={120} width={200} borderRadius="md" />
            </Box>
            <Box mr={4}>
              <Skeleton height={120} width={200} borderRadius="md" />
            </Box>
            <Box mr={4}>
              <Skeleton height={120} width={200} borderRadius="md" />
            </Box>
          </>
        ) : (
          articles.map((article, index) => (
            <Box
              key={index}
              flex="1"
              p="4"
              borderWidth="1px"
              borderColor="gray.200"
              borderRadius="md"
              m="2"
              transition="all 0.3s ease-in-out"
              _hover={{ boxShadow: "lg", transform: "scale(1.05)" }}
            >
              <Link href={article.url} isExternal>
                <Text
                  fontSize="md"
                  fontWeight="bold"
                  mb="2"
                  _hover={{ color: "blue.500" }}
                >
                  {article.title}
                </Text>
                {article.urlToImage && (
                  <Image
                    src={article.urlToImage}
                    alt={article.title}
                    mb="4"
                    height={100}
                    borderRadius="md"
                    transition="all 0.3s ease-in-out"
                    _hover={{ transform: "scale(1.05)" }}
                  />
                )}
                <Text fontSize="sm" color="gray.600" mb="2">
                  {article.publishedAt}
                </Text>
              </Link>
            </Box>
          ))
        )}
      </Flex>
    </Fade>
  );
};

export default CenteredContent;
