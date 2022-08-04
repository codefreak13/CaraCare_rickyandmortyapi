import {useNavigation} from '@react-navigation/native';
import {useContext} from 'react';
import {AppContext} from '../store/Context';
import {APP_ROUTE, FavoriteScreenNavigationProp} from '../navigation/types';
import {Character} from 'apollo/query';

const useFavorite = () => {
  const {favoriteList, deleteFavoriteItem} = useContext(AppContext);
  const navigation = useNavigation<FavoriteScreenNavigationProp>();

  const goBack = () => navigation.goBack();

  const onPress = (item: Character) => {
    navigation.navigate(APP_ROUTE.DETAIL, item);
  };

  return {
    onPress,
    goBack,
    favoriteList,
    deleteFavoriteItem,
  };
};

export default useFavorite;
