import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/cat.webp";
import ColorModeSwitch from "./colorModeSwitch";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <HStack padding="10px">
      <Link to={"/"}>
        <Image src={logo} boxSize="60px" borderRadius={11} objectFit="cover" />
      </Link>

      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
