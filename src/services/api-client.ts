import axios from "axios";

export interface Response<T> {
  id: number;
  next: string | null;
  results: T[];
}

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "f4c414e96fd94e8d88df7f999331651d",
  },
});
