import { useState, useEffect } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Link,
  Image,
  VStack,
} from "@chakra-ui/react";
import Navbar from "../component/navbar";

const ReadArticles = () => {
  const [readArticles, setReadArticles] = useState([]);

  // Mendapatkan data artikel yang sudah dibaca dari local storage saat komponen dimuat
  useEffect(() => {
    const savedReadArticles =
      JSON.parse(localStorage.getItem("readArticles")) || [];
    setReadArticles(savedReadArticles);
  }, []);

  return (
    <>
      <Navbar />
      <VStack p={4} alignItems="center">
        <h2>Artikel yang Sudah Dibaca</h2>
        <Table variant="striped">
          <Thead>
            <Tr>
              <Th>Gambar</Th>
              <Th>Judul</Th>
              <Th>Link</Th>
            </Tr>
          </Thead>
          <Tbody>
            {readArticles.map((article, index) => (
              <Tr key={index}>
                <Td>
                  <Image
                    src={article?.urlToImage}
                    alt={article?.title}
                    boxSize="100px"
                    objectFit="cover"
                  />
                </Td>
                <Td>{article?.title}</Td>
                <Td>
                  <Link href={article?.url} isExternal>
                    Baca Selengkapnya
                  </Link>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </VStack>
    </>
  );
};

export default ReadArticles;
