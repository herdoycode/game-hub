import { useQuery } from "@tanstack/react-query";
import apiClient, { Response } from "../services/api-client";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

export const useGenres = () =>
  useQuery<Response<Genre>, Error>({
    queryKey: ["genres"],
    queryFn: () =>
      apiClient.get<Response<Genre>>("/genres").then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000,
  });
