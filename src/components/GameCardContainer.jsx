import { Box } from "@chakra-ui/react";

const GameCardContainer = ({ children }) => {
  return (
    <Box
      width="100%"
      borderRadius={10}
      overflow="hidden"
      _hover={{
        transform: "scale(1.03)",
        transition: "trandform .15s ease-in ",
      }}
    >
      {children}
    </Box>
  );
};

export default GameCardContainer;
