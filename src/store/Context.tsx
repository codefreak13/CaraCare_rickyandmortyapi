import {Character} from 'src/apollo/query';
import React, {createContext, ProviderProps} from 'react';
import {useContextHook} from 'src/hooks';

export const AppContext = createContext<{
  viewType: string;
  favoriteList: Character[];
  toggleViewType: () => void;
  favoriteListIds: string[];
  deleteFavoriteItem: (a: Character) => void;
  addFavoriteItem: (a: Character) => void;
}>({
  favoriteList: [],
  viewType: '',
  toggleViewType: () => {},
  addFavoriteItem: () => {},
  deleteFavoriteItem: () => {},
  favoriteListIds: ['1'],
});

const AppContextProvider = ({
  value,
  children,
}: Partial<ProviderProps<Partial<ReturnType<typeof useContextHook>>>>) => {
  const {
    viewType,
    favoriteList,
    toggleViewType,
    addFavoriteItem,
    deleteFavoriteItem,
    favoriteListIds,
  } = useContextHook();

  return (
    <AppContext.Provider
      value={{
        viewType,
        favoriteList,
        toggleViewType,
        addFavoriteItem,
        deleteFavoriteItem,
        favoriteListIds,
        ...value,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
