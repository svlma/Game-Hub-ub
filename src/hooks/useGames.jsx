import { useInfiniteQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";

const apiClient = new APIClient("/games");
const useGames = (gameQuery) =>
  useInfiniteQuery({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genre?.id,
          parents_platforms: gameQuery.platform?.id,
          ordering: gameQuery.ordering,
          search: gameQuery.search,
          page: pageParam,
        },
      }),
    getNextPageParam: (LastPage, allPages) => {
      return LastPage.next ? allPages.length + 1 : undefined;
    },
  });
export default useGames;
