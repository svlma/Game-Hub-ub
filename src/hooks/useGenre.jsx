import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import apiClient from "../services/api-client";

const useGenre = () => {
  return useQuery({
    queryKey: ["genres"],
    queryFn: () => apiClient.get("/genres").then((res) => res.data),
    staleTime: 24 * 60 * 60 * 100, //24h
    initialData: { count: genres.length, results: genres },
  });
};

export default useGenre;
