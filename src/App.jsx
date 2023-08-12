import { Grid, GridItem, HStack, Show, Box } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";
function App() {
  const [gameQuery, setGameQuery] = useState({});
  return (
    <Grid
      templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
      templateColumns={{ base: "1fr", lg: "240px 1fr" }}
    >
      <GridItem area="nav">
        <NavBar
          searchText={gameQuery.search}
          onSearch={(search) => setGameQuery({ ...gameQuery, search })}
        />
      </GridItem>

      <Show above="lg">
        <GridItem area="aside" paddingX="8px">
          <GenreList
            selectedGenreId={gameQuery.genreId}
            onselectGenre={(genre) =>
              setGameQuery({ ...gameQuery, genreId: genre.id })
            }
          />
        </GridItem>
      </Show>

      <GridItem area="main">
        <Box paddingLeft={2}>
          <GameHeading gameQuery={gameQuery} />
          <HStack spacing={5} marginBottom={5}>
            <PlatformSelector
              selectedPlatformId={gameQuery.platformId}
              onSelectPlatform={(platform) =>
                setGameQuery({ ...gameQuery, platformId: platform.id })
              }
            />
            <SortSelector
              onSelectSortOrder={(ordering) =>
                setGameQuery({ ...gameQuery, ordering })
              }
              selectedOrder={gameQuery.ordering}
            />
          </HStack>
        </Box>

        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
