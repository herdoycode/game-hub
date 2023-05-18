import { useQuery } from "@tanstack/react-query";
import apiClient, { Response } from "../services/api-client";
import Genre from "../entitis/Genre";

export const useGenres = () =>
  useQuery<Response<Genre>, Error>({
    queryKey: ["genres"],
    queryFn: () =>
      apiClient.get<Response<Genre>>("/genres").then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000,
  });
