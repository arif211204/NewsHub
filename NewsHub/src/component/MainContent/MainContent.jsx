import { useEffect, useState } from "react";
import { Grid, Box, Link, Image, Text, Skeleton } from "@chakra-ui/react";
import { fetchArticles } from "../../utils/api";

const MainContent = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchArticles(
          "apple",
          "2024-02-21",
          "2024-02-21",
          "popularity"
        );
        setArticles(data);
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
    <>
      <Grid templateColumns="1fr 4fr" gap={4}>
        <Box boxShadow="md" rounded="md" bg="gray.50" mb="4" w={500}>
          <Skeleton height={loading ? 520 : 0} isLoaded={!loading}>
            {articles.length > 0 && (
              <Link href={articles[0]?.url} target="_blank">
                <Image
                  src={articles[0]?.urlToImage}
                  alt={articles[0]?.title}
                  borderRadius="md"
                  width="100%"
                  objectFit="cover"
                  height={450}
                  mb="4"
                />
                <Text fontSize="lg" fontWeight="bold" lineHeight="tall">
                  {articles[0]?.title}
                </Text>
                <Text fontSize="sm" color="gray.600" mt="1">
                  By {articles[0]?.author} | {articles[0]?.publishedAt}
                </Text>
                <Text mt="2" fontSize="sm" isTruncated>
                  {articles[0]?.description}
                </Text>
              </Link>
            )}
          </Skeleton>
        </Box>

        <Grid templateColumns="repeat(2, 1fr)" gap={4}>
          {loading ? (
            <>
              <Box mr={4}>
                <Skeleton height={200} width={300} borderRadius="md" />
              </Box>
              <Box mr={4}>
                <Skeleton height={200} width={300} borderRadius="md" />
              </Box>
              <Box mr={4}>
                <Skeleton height={200} width={300} borderRadius="md" />
              </Box>
              <Box mr={4}>
                <Skeleton height={200} width={300} borderRadius="md" />
              </Box>
            </>
          ) : (
            articles.slice(1, 5).map((article, index) => (
              <Box
                key={index + 1}
                boxShadow="md"
                rounded="md"
                bg="gray.50"
                mb="4"
                p={2}
                onClick={() => handleArticleClick(article)}
              >
                <Link href={article?.url} target="_blank">
                  <Image
                    src={article?.urlToImage}
                    alt={article?.title}
                    borderRadius="md"
                    width="100%"
                    mb="4"
                  />
                  <Text fontSize="md" fontWeight="bold" lineHeight="tall">
                    {article?.title}
                  </Text>
                  <Text fontSize="sm" color="gray.600" mt="1">
                    By {article?.author} | {article?.publishedAt}
                  </Text>
                </Link>
              </Box>
            ))
          )}
        </Grid>
      </Grid>
    </>
  );
};

export default MainContent;
