import { useInfiniteQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import gameQueryStore from "../store";

const apiClient = new APIClient("/games");
const useGames = () => {
  const gameQuery = gameQueryStore((s) => s.gameQuery);
  return useInfiniteQuery({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genreId,
          parents_platforms: gameQuery.platformId,
          ordering: gameQuery.ordering,
          search: gameQuery.search,
          page: pageParam,
        },
      }),
    getNextPageParam: (LastPage, allPages) => {
      return LastPage.next ? allPages.length + 1 : undefined;
    },
    staleTime: 24 * 60 * 60 * 1000, //24h
  });
};

export default useGames;
