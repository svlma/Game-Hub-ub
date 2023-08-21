import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";

const useTrailers = (gameId) => {
  //   const apiClient = new APIClient("/games");
  const apiClient = new APIClient(`/games/${gameId}/movies`);
  return useQuery({
    queryKey: ["trailer", gameId],
    queryFn: () => apiClient.getAll(gameId),
  });
};

export default useTrailers;
