import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";

const useGames = (gameQuery) =>
  useQuery({
    queryKey: ["games", gameQuery],
    queryFn: () =>
      apiClient
        .get("/games", {
          params: {
            genres: gameQuery.genre?.id,
            parents_platforms: gameQuery.platform?.id,
            ordering: gameQuery.ordering,
            search: gameQuery.search,
          },
        })
        .then((res) => res.data),
  });
export default useGames;
