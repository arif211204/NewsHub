/* eslint-disable no-unused-vars */
import { Flex, Box, Divider } from "@chakra-ui/react";
import MainLeft from "../component/MainContent/MainLeft";
import MainContent from "../component/MainContent/MainContent";
import MainRight from "../component/MainContent/MainRight";
import CenteredContent from "../component/MainContent/CenteredContent";
import SecondMainContent from "../component/MainContent/SecondMainContent";
import ThirdMainContent from "../component/MainContent/ThirdMainContent";
import Navbar from "../component/navbar";

const Home = () => {
  return (
    <>
      <Navbar />

      <Box>
        <Flex
          direction="row"
          justifyContent="space-between"
          width="100%"
          p={10}
        >
          <Box p={3}>
            <MainLeft />
          </Box>
          <Box width="100%">
            <MainContent />
          </Box>
        </Flex>
      </Box>
      <CenteredContent />
      <Box width="100%">
        <SecondMainContent />
      </Box>
      <Flex justifyContent={"space-between"} p={5}>
        <ThirdMainContent />
        <Box>
          <MainRight />
        </Box>
      </Flex>
    </>
  );
};

export default Home;
