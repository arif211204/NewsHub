/* eslint-disable no-unused-vars */
import { Flex, Box, Divider } from "@chakra-ui/react";
import MainLeft from "../component/MainLeft";
import MainContent from "../component/MainContent";
import MainRight from "../component/MainRight";
import CenteredContent from "../component/CenteredContent";
import SecondMainContent from "../component/SecondMainContent";
import ThirdMainContent from "../component/ThirdMainContent";
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
