import {
  Button,
  Flex,
  Heading,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useBreakpointValue,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import logo from "../../assets/logo.svg";

export const Header = () => {
  const isWideVersion = useBreakpointValue({
    base: false,
    md: true,
  });

  return (
    <Flex p="10px">
      <Flex justifyContent="space-between" w="100%">
        <Image w="100px" src={logo} alt="logo-img" />
        {isWideVersion ? (
          <Flex justifyContent="end" w="60%">
            <Button mr="5px">Inicio</Button>
            <Button mr="5px">Séries</Button>
            <Button mr="5px">Filmes</Button>
            <Button mr="5px">Documentários</Button>
          </Flex>
        ) : (
          <Menu>
            <MenuButton as={Button} bg="unset">
              <HamburgerIcon />
            </MenuButton>
            <MenuList zIndex={2}>
              <MenuItem>Início</MenuItem>
              <MenuItem>Séries</MenuItem>
              <MenuItem>Filmes</MenuItem>
              <MenuItem>Documentários</MenuItem>
            </MenuList>
          </Menu>
        )}
      </Flex>
    </Flex>
  );
};
