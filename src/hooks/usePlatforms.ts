import { useQuery } from "@tanstack/react-query";
import apiClient, { Response } from "../services/api-client";
import Platform from "../entitis/Platform";

export const usePlatforms = () =>
  useQuery<Response<Platform>, Error>({
    queryKey: ["platforms"],
    queryFn: () =>
      apiClient
        .get<Response<Platform>>("/platforms/lists/parents")
        .then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000,
  });
