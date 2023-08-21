import { SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import CriticsScore from "../components/CriticsScore";
import DefinitionItems from "../components/DefinitionItems";

const GameAttributes = ({ game }) => {
  return (
    <SimpleGrid columns={2} as={dl}>
      <DefinitionItems term="Platforms">
        {game.parent_platforms?.map(({ platform }) => (
          <Text key={platform.id}>{platform.name}</Text>
        ))}
      </DefinitionItems>
      <DefinitionItems term="Metascore">
        <CriticsScore score={game.metacritic} />
      </DefinitionItems>
      <DefinitionItems term="Genre">
        {game.genres.map((genre) => (
          <Text key={genre.id}>{genre.name}</Text>
        ))}
      </DefinitionItems>
      <DefinitionItems term="Publishers">
        {game.publishers.map((p) => (
          <Text key={p.id}>{p.name}</Text>
        ))}
      </DefinitionItems>
    </SimpleGrid>
  );
};

export default GameAttributes;
