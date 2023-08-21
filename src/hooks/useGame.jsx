import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";

const useGame = (slug) => {
  const apiClient = new APIClient("/games");
  return useQuery({
    queryKey: ["games", slug],
    queryFn: () => apiClient.get(slug),
  });
};

export default useGame;
