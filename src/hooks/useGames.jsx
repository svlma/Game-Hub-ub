import useData from "./useData";
const useGames = (selectedGenre, selectedPlatform, selectedOrder) =>
  useData(
    "/games",
    {
      params: {
        genres: selectedGenre?.id,
        platforms: selectedPlatform?.id,
        ordering: selectedOrder,
      },
    },
    [selectedGenre?.id, selectedPlatform?.id, selectedOrder]
  );

export default useGames;
