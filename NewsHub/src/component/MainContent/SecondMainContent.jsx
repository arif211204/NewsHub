import { useEffect, useState } from "react";
import { Grid, Box, Link, Image, Text, Skeleton } from "@chakra-ui/react";
import { fetchTopBusinessHeadlines } from "../../utils/api";

const SecondMainContent = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchTopBusinessHeadlines();
      setArticles(data);
      setLoading(false);
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
    <Grid templateColumns="4fr 1fr" gap={4} p={5}>
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
              <Link href={article.url} target="_blank">
                <Skeleton isLoaded={!loading} mr={4}>
                  <Image
                    src={article.urlToImage}
                    alt={article.title}
                    borderRadius="md"
                    width="100%"
                    mb="4"
                  />
                </Skeleton>
                <Skeleton isLoaded={!loading}>
                  <Text fontSize="md" fontWeight="bold" lineHeight="tall">
                    {article.title}
                  </Text>
                </Skeleton>
                <Skeleton isLoaded={!loading}>
                  <Text fontSize="sm" color="gray.600" mt="1">
                    By {article.author} | {article.publishedAt}
                  </Text>
                </Skeleton>
              </Link>
            </Box>
          ))
        )}
      </Grid>

      <Box boxShadow="md" rounded="md" bg="gray.50" mb="4" w={500}>
        <Link href={articles[0]?.url} target="_blank">
          <Skeleton isLoaded={!loading}>
            <Image
              src={articles[0]?.urlToImage}
              alt={articles[0]?.title}
              borderRadius="md"
              width="100%"
              objectFit="cover"
              height={520}
              mb="4"
            />
          </Skeleton>
          <Skeleton isLoaded={!loading}>
            <Text fontSize="lg" fontWeight="bold" lineHeight="tall">
              {articles[0]?.title}
            </Text>
          </Skeleton>
          <Skeleton isLoaded={!loading}>
            <Text fontSize="sm" color="gray.600" mt="1">
              By {articles[0]?.author} | {articles[0]?.publishedAt}
            </Text>
          </Skeleton>
          <Skeleton isLoaded={!loading}>
            <Text mt="2" fontSize="sm">
              {articles[0]?.description}
            </Text>
          </Skeleton>
        </Link>
      </Box>
    </Grid>
  );
};

export default SecondMainContent;
