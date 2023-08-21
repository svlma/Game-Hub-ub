import APIClient from "../services/api-client";
import { useQuery } from "@tanstack/react-query";

const useScreenShots = (gameId) => {
  const apiClient = new APIClient(`/games/${gameId}/screenshots`);
  return useQuery({
    queryKey: ["screenshots", gameId],
    queryFn: apiClient.getAll,
  });
};

export default useScreenShots;
