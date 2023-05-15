import { create } from "zustand";

interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder?: string;
  searchText?: string;
}

interface GameQueryStore {
  gameQuery: GameQuery;
  setSearchText: (searchText: string) => void;
  setSortOrder: (sortOrder: string) => void;
  setGenreId: (genreId: number) => void;
  setPlatformId: (platformId: number) => void;
}

const useGameQueryStore = create<GameQueryStore>((set) => ({
  gameQuery: {},
  setSearchText: (searchText) => set(() => ({ gameQuery: { searchText } })),
  setSortOrder: (sortOrder) =>
    set((store) => ({
      gameQuery: { ...store.gameQuery, sortOrder, searchText: undefined },
    })),
  setGenreId: (genreId) =>
    set((store) => ({
      gameQuery: { ...store.gameQuery, genreId, searchText: undefined },
    })),
  setPlatformId: (platformId) =>
    set((store) => ({
      gameQuery: { ...store.gameQuery, platformId, searchText: undefined },
    })),
}));

export default useGameQueryStore;
