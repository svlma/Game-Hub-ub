import { Heading } from "@chakra-ui/react";
import React from "react";

const GameHeading = ({ selectedPlatform, selectedGenre }) => {
  const heading = `${selectedPlatform?.name || ""} ${
    selectedGenre?.name || ""
  } Games`;
  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
