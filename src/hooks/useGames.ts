import { useInfiniteQuery } from "@tanstack/react-query";
import apiClient, { Response } from "../services/api-client";
import useGameQueryStore from "../store";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

export const useGames = () => {
  const gameQuery = useGameQueryStore((s) => s.gameQuery);
  return useInfiniteQuery<Response<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClient
        .get<Response<Game>>("/games", {
          params: {
            genres: gameQuery.genreId,
            parent_platforms: gameQuery.platformId,
            ordering: gameQuery.sortOrder,
            search: gameQuery.searchText,
            page: pageParam,
          },
        })
        .then((res) => res.data),
    getNextPageParam: (lastPage, allPages) =>
      lastPage.next ? allPages.length + 1 : undefined,
    staleTime: 24 * 60 * 60 * 1000,
  });
};
