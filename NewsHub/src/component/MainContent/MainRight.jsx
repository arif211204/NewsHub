import { useState, useEffect } from "react";
import { Box, Link, Image, Text, Skeleton, Fade } from "@chakra-ui/react";
import { fetchArticles } from "../../utils/api";

const MainRight = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchArticles();
        setArticles(data.slice(0, 5));
        setLoading(false);
      } catch (error) {
        console.error("Error fetching articles:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  const handleArticleClick = (article) => {
    const readArticles = JSON.parse(localStorage.getItem("readArticles")) || [];
    localStorage.setItem(
      "readArticles",
      JSON.stringify([...readArticles, article])
    );
  };

  return (
    <Box>
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
          <Fade in={!loading} key={index}>
            <Box
              p="4"
              boxShadow="md"
              rounded="md"
              bg="gray.50"
              transition="all 0.3s ease-in-out"
              _hover={{ boxShadow: "lg" }}
              width={200}
              onClick={() => handleArticleClick(article)}
              isTruncated
              m={4}
            >
              <Link href={article.url} target="_blank">
                <Image
                  src={article.urlToImage}
                  alt={article.title}
                  borderRadius="md"
                  height={100}
                  objectFit="cover"
                  transition="all 0.3s ease-in-out"
                  _hover={{ transform: "scale(1.05)" }}
                />
                <Text mt="2" fontSize="md" fontWeight="bold" lineHeight="tall">
                  {article.title}
                </Text>
                <Text fontSize="sm" color="gray.600">
                  {article.publishedAt}
                </Text>
              </Link>
            </Box>
          </Fade>
        ))
      )}
    </Box>
  );
};

export default MainRight;
