import { Heading } from "@chakra-ui/react";
import React from "react";
import useGenre from "../hooks/useGenre";
import usePlatform from "../hooks/usePlatforms";
import gameQueryStore from "../store";

const GameHeading = () => {
  const genreId = gameQueryStore((s) => s.gameQuery.genreId);
  const genre = useGenre(genreId);

  const platformId = gameQueryStore((s) => s.gameQuery.platformId);
  const selectedPlatform = usePlatform(platformId);

  const heading = `${selectedPlatform?.name || ""} ${genre?.name || ""} Games`;
  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
