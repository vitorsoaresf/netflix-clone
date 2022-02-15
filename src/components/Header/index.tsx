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
    <Flex bg="blue" p="10px">
      <Flex justifyContent="space-between" w="100%">
        <Image w="100px" src={logo} alt="logo-img" />
        {isWideVersion ? (
          <Flex justifyContent="space-around" bg="green" w="60%">
            <Button>Inicio</Button>
            <Button>Séries</Button>
            <Button>Filmes</Button>
            <Button>Documentários</Button>
          </Flex>
        ) : (
          <Menu>
            <MenuButton as={Button}>
              <HamburgerIcon />
            </MenuButton>
            <MenuList>
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
