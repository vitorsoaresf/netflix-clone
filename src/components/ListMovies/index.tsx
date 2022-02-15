import { Box, Flex, Heading, Image } from "@chakra-ui/react";
import mini1 from "../../assets/mini1.jpg";
import mini2 from "../../assets/mini2.jpg";
import mini3 from "../../assets/mini3.jpg";
import mini4 from "../../assets/mini4.jpg";
import mini5 from "../../assets/mini5.jpg";
import mini6 from "../../assets/mini6.jpg";
import mini7 from "../../assets/mini7.jpg";
import mini8 from "../../assets/mini8.jpg";
import mini9 from "../../assets/mini9.jpg";
import mini10 from "../../assets/mini10.jpg";
import React from "react";

const listImg = [
  mini1,
  mini2,
  mini3,
  mini4,
  mini5,
  mini6,
  mini7,
  mini8,
  mini9,
  mini10,
];

export const ListMovies = () => {
  return (
    <Flex
      mt={["70px", "170px"]}
      ml={["10px", "30px"]}
      fontFamily="Arial"
      flexDir="column"
      zIndex={1}
    >
      {/* <Heading>Assista</Heading> */}
      <Flex overflowX="scroll">
        {React.Children.toArray(
          listImg.map((img) => (
            <Image w="310px" h="300px" src={img} alt="img-movie" />
          ))
        )}
      </Flex>
    </Flex>
  );
};
