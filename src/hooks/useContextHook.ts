import {Character, STORAGE_VALUES, VIEW_TYPE} from 'src/types';
import AsyncStorage from '@react-native-community/async-storage';
import {useState, useEffect, useLayoutEffect, useCallback} from 'react';

const useAppContext = () => {
  const [favoriteList, setFavoriteList] = useState<Character[]>([]);
  const [viewType, setViewType] = useState<VIEW_TYPE>(VIEW_TYPE.list);
  const [favoriteListIds, setFavoriteListIds] = useState<string[]>([]);

  //Deleting favorite item
  const deleteFavoriteItem = (favoriteItem: Character) => {
    const newList = favoriteList.filter(fav => fav.id !== favoriteItem.id);
    setFavoriteList(newList);
  };

  //add or remove favorite item
  const addFavoriteItem = (favoriteItem: Character) => {
    const favoriteItemExists = favoriteList.find(
      fav => fav?.id === favoriteItem.id,
    );
    if (favoriteItemExists) {
      deleteFavoriteItem(favoriteItem);
      return;
    }
    const clonedFavoriteList = [favoriteItem, ...favoriteList];
    setFavoriteList(clonedFavoriteList);
  };

  //Saves favorite list to storage
  const saveFavoriteList = async () => {
    await AsyncStorage.setItem(
      STORAGE_VALUES.FAVORITE_LIST,
      JSON.stringify(favoriteList),
    );
  };

  //Fetch Favorite list from Storage
  const getFavoriteList = async () => {
    const value = await AsyncStorage.getItem(STORAGE_VALUES.FAVORITE_LIST);
    if (value) {
      setFavoriteList(JSON.parse(value));
    }
  };

  //Saves view type
  const saveViewType = async () => {
    await AsyncStorage.setItem(STORAGE_VALUES.VIEW_TYPE, viewType);
  };

  //Fetch view type from Storage
  const getViewType = async () => {
    const value = await AsyncStorage.getItem(STORAGE_VALUES.VIEW_TYPE);
    if (value) {
      setViewType(value as VIEW_TYPE);
    }
  };

  //gets id of favorite list items
  const getFavoriteListIds = useCallback(() => {
    const listIds = favoriteList.map(item => item.id);
    setFavoriteListIds(listIds);
  }, [JSON.stringify(favoriteList)]);

  //toggles view type options
  const toggleViewType = () => {
    viewType === VIEW_TYPE.list
      ? setViewType(VIEW_TYPE.grid)
      : setViewType(VIEW_TYPE.list);
  };

  useLayoutEffect(() => {
    getViewType();
    getFavoriteList();
  }, []);

  useEffect(() => {
    if (favoriteList.length !== 0) {
      saveFavoriteList();
    }
    saveViewType();
  }, [JSON.stringify(favoriteList), viewType]);

  useEffect(() => {
    getFavoriteListIds();
  }, [getFavoriteListIds]);

  return {
    viewType,
    favoriteList,
    toggleViewType,
    favoriteListIds,
    addFavoriteItem,
    deleteFavoriteItem,
  };
};

export default useAppContext;
