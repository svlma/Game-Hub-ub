import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/cat.webp";
import ColorModeSwitch from "./colorModeSwitch";
import SearchInput from "./SearchInput";
const NavBar = () => {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="60px" borderRadius={11} objectFit="cover" />
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
