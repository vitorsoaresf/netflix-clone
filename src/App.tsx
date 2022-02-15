import { Flex } from "@chakra-ui/react";
import { FeaturedImage } from "./components/FeaturedImage";
import { Header } from "./components/Header";
import { ListMovies } from "./components/ListMovies";

function App() {
  return (
    <Flex flexDir="column" h="100vh">
      <Header />
      <FeaturedImage />
      <ListMovies />
    </Flex>
  );
}

export default App;
