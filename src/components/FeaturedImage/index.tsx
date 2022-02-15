import { ArrowRightIcon, InfoIcon } from "@chakra-ui/icons";
import { Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import img from "../../assets/capa-house.jpg";
import { FaPlay } from "react-icons/fa";
export const FeaturedImage = () => {
  return (
    <Flex h={["400px", "700px"]}>
      <Flex
        ml={["10px", "30px"]}
        mt={["60px", "150px"]}
        flexDir="column"
        w="100%"
        maxW="500px"
        h="100%"
        alignItems="flex-start"
        justifyContent="end"
        zIndex={1}
        color="white"
        fontSize={["1rem"]}
      >
        <Heading fontFamily="'Trebuchet MS', Arial, sans-serif">
          HOUSE OF CARDS{" "}
        </Heading>
        <Text textAlign="left" fontWeight="700" mb="20px">
          Nada podia impedir o político sem escrúpulos Frank Underwood de
          conquistar Washington. Assista agora a nova temporada de House of
          Cards ques está imperdível.
        </Text>
        <Flex flexDir="row" flexWrap="wrap">
          <Button
            mb="10px"
            mr="10px"
            bg="black"
            color="white"
            _hover={{ color: "black", bg: "white" }}
          >
            <FaPlay />
            <Text ml="5px">Assistir Agora</Text>
          </Button>
          <Button
            bg="black"
            color="white"
            _hover={{ color: "black", bg: "white" }}
          >
            <InfoIcon />
            <Text ml="5px">Mais informações</Text>
          </Button>
        </Flex>
      </Flex>
      <Image
        h={["400px", "700px"]}
        w="100%"
        position="absolute"
        src={img}
        alt="img-featured"
        filter="brightness(0.8)"
        zIndex={0}
      />
    </Flex>
  );
};
