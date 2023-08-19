import { create } from "zustand";

const gameQueryStore=create(set=>({
    gameQuery:{},
    setSearchText :(searchText)=>set(()=>({gameQuery:searchText})),
    setGenreId :(genreId)=>set((store)=>({gameQuery:{...store.gameQuery,genreId }})),
    setPlatformId :(platformId)=>set((store)=>({gameQuery:{...store.gameQuery,platformId}})),
    setSortOrder :(ordering)=>set((store)=>({gameQuery:{...store.gameQuery,ordering  }})),
}))

export default gameQueryStore;