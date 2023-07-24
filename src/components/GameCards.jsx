import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import React from "react";
import PlatformIconList from "./PlatformIconList";
import CriticsScore from "./CriticsScore";
import getCroppedImageUrl from "../services/image-url";
const GameCard = ({ game }) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <HStack justifyContent="space-between">
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticsScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
