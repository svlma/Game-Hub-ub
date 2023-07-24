import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/cat2.webp";
import ColorModeSwitch from "./colorModeSwitch";
const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={logo} boxSize="60px" />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
