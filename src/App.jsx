import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";

function App() {
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [selectedPlatform, setSelectedPlatform] = useState(null);
  const [selectedOrder, setSelectedOrder] = useState({});
  const [searchText, setSearchText] = useState([]);
  return (
    <Grid
      templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
      templateColumns={{ base: "1fr", lg: "240px 1fr" }}
    >
      <GridItem area="nav">
        <NavBar
          searchText={searchText}
          onSearch={(searchText) => setSearchText(searchText)}
        />
      </GridItem>

      <Show above="lg">
        <GridItem area="aside" paddingX="8px">
          <GenreList
            selectedGenre={selectedGenre}
            onselectGenre={(genre) => setSelectedGenre(genre)}
          />
        </GridItem>
      </Show>

      <GridItem area="main">
        <HStack paddingLeft={2} spacing={5} marginBottom={5}>
          <PlatformSelector
            selectedPlatform={selectedPlatform}
            onSelectPlatform={(platform) => setSelectedPlatform(platform)}
          />
          <SortSelector
            onSelectSortOrder={(selectedOrder) =>
              setSelectedOrder(selectedOrder)
            }
            selectedOrder={selectedOrder}
          />
        </HStack>

        <GameGrid
          selectedPlatform={selectedPlatform}
          selectedGenre={selectedGenre}
          selectedOrder={selectedOrder}
          searchText={searchText}
        />
      </GridItem>
    </Grid>
  );
}

export default App;
