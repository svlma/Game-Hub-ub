import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import React from "react";
import PlatformIconList from "./PlatformIconList";
import CriticsScore from "./CriticsScore";
import getCroppedImageUrl from "../services/image-url";
import { Link } from "react-router-dom";

const GameCard = ({ game }) => {
  if (!game || !Array.isArray(game.parent_platforms)) {
    return;
  }
  return (
    <Card>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <HStack justifyContent="space-between" marginBottom={3}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticsScore score={game.metacritic} />
        </HStack>
        <Heading fontSize="2xl">
          <Link to={"/games/" + game.slug}>{game.name}</Link>
        </Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
