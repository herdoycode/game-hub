import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import { Game } from "./useGames";

const useGame = (slug: string) =>
  useQuery<Game, Error, Game>({
    queryKey: ["game", slug],
    queryFn: () => apiClient.get<Game>(`games/${slug}`).then((res) => res.data),
  });
export default useGame;
