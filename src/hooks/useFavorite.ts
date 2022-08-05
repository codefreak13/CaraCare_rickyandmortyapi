import {useContext} from 'react';
import {Character} from 'src/types';
import {AppContext} from 'src/store/Context';
import {useNavigation} from '@react-navigation/native';
import {APP_ROUTE, FavoriteScreenNavigationProp} from 'src/navigation/types';

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
