import { Flex } from "@chakra-ui/react";
import { FeaturedImage } from "./components/FeaturedImage";
import { Header } from "./components/Header";

function App() {
  return (
    <Flex flexDir="column" h="100vh">
      <Header />
      <FeaturedImage />
    </Flex>
  );
}

export default App;
