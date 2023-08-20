import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import React from "react";
import GameGrid from "../components/GameGrid";
import GameHeading from "../components/GameHeading";
import GenreList from "../components/GenreList";
import PlatformSelector from "../components/PlatformSelector";
import SortSelector from "../components/SortSelector";
const Homepage = () => {
  return (
    <Grid
      templateAreas={{ base: ` "main"`, lg: ` "aside main"` }}
      templateColumns={{ base: "1fr", lg: "240px 1fr" }}
    >
      <Show above="lg">
        <GridItem area="aside" paddingX="8px">
          <GenreList />
        </GridItem>
      </Show>

      <GridItem area="main">
        <Box paddingLeft={2}>
          <GameHeading />
          <HStack spacing={5} marginBottom={5}>
            <PlatformSelector />
            <SortSelector />
          </HStack>
        </Box>

        <GameGrid />
      </GridItem>
    </Grid>
  );
};

export default Homepage;
