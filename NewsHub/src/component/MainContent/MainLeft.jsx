import { useState, useEffect } from "react";
import { Box, Link, Text, Fade, Center, Skeleton } from "@chakra-ui/react";
import { fetchTopBusinessHeadlines } from "../../utils/api";

const MainLeft = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchTopBusinessHeadlines();
        setArticles(data.slice(0, 6));
        setLoading(false);
      } catch (error) {
        console.error("Error fetching top business headlines:", error);
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
    <>
      <Center fontSize="2xl" fontWeight="bold" color="blue.500">
        News Popular
      </Center>
      <Fade in={!loading}>
        <Box>
          {articles.map((article, index) => (
            <Box
              key={index}
              p="4"
              boxShadow="md"
              rounded="md"
              bg="gray.50"
              width={200}
              margin={2}
              transition="all 0.3s ease-in-out"
              _hover={{ boxShadow: "lg", transform: "scale(1.05)" }}
              onClick={() => handleArticleClick(article)}
            >
              <Link href={article?.url} target="_blank">
                <Skeleton isLoaded={!loading}>
                  <Text mt="2" fontSize="lg" fontWeight="bold" isTruncated>
                    {article?.title}
                  </Text>
                </Skeleton>
                <Skeleton isLoaded={!loading}>
                  <Text fontSize="sm" color="gray.600">
                    {article?.publishedAt}
                  </Text>
                </Skeleton>
              </Link>
            </Box>
          ))}
        </Box>
      </Fade>
    </>
  );
};

export default MainLeft;
