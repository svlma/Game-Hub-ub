import useData from "./useData";
const useGames = (selectedGenre, selectedPlatform, selectedOrder, searchText) =>
  useData(
    "/games",
    {
      params: {
        genres: selectedGenre?.id,
        platforms: selectedPlatform?.id,
        ordering: selectedOrder,
        search: searchText,
      },
    },
    [selectedGenre?.id, selectedPlatform?.id, selectedOrder, searchText]
  );

export default useGames;
