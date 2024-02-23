/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { Flex, Box, Link, Image, Text, Skeleton } from "@chakra-ui/react";
import { fetchTopBusinessHeadlines } from "../utils/api";

const ThirdMainContent = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    const data = await fetchTopBusinessHeadlines();
    setArticles(data);
    setLoading(false);
  };

  fetchData();

  return (
    <Flex flexDirection="column" gap={5}>
      {[...Array(2)].map((_, rowIndex) => (
        <Flex key={rowIndex} mb={4}>
          {[...Array(4)].map((_, colIndex) => {
            const articleIndex = rowIndex * 4 + colIndex;
            const article = articles[articleIndex];

            return (
              <Box
                key={colIndex}
                flex={1}
                p={2}
                boxShadow="md"
                rounded="md"
                bg="gray.50"
              >
                {article ? (
                  <Link href={article.url} target="_blank">
                    <Image
                      src={article.urlToImage}
                      alt={article.title}
                      borderRadius="md"
                      width="100%"
                      mb="2"
                    />
                    <Text fontSize="md" fontWeight="bold" lineHeight="tall">
                      {article.title}
                    </Text>
                    <Text fontSize="sm" color="gray.600" mt="1">
                      By {article.author} | {article.publishedAt}
                    </Text>
                    <Text mt="2" fontSize="sm">
                      {article.description}
                    </Text>
                  </Link>
                ) : (
                  <Skeleton height="200px" width={250} />
                )}
              </Box>
            );
          })}
        </Flex>
      ))}
    </Flex>
  );
};

export default ThirdMainContent;
