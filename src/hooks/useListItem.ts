import {useContext} from 'react';
import {hp} from '../utils/Utils';
import {AppContext} from '../store/Context';
import {
  ALIGN_TYPE,
  FLEX_TYPE,
  ListItemProps,
  POSITION_TYPE,
  VIEW_TYPE,
} from '../types';

const useListItem = (props: ListItemProps) => {
  const {
    id,
    name,
    status,
    episode,
    species,
    image,
    origin,
    viewType,
    addToFavorite,
    onPress,
  } = props;
  const {deleteFavoriteItem, favoriteListIds} = useContext(AppContext);
  const originName = origin?.name?.split(' ')[0];
  const firstEpisode = episode[0]?.name;
  const flexDirection =
    viewType === VIEW_TYPE.grid ? FLEX_TYPE.columnReverse : FLEX_TYPE.row;
  const alignItems =
    viewType === VIEW_TYPE.grid ? ALIGN_TYPE.center : ALIGN_TYPE.flexStart;

  const customStyle = {
    flexDirection,
    alignItems,
  };

  const contentStyle = {
    width: viewType === VIEW_TYPE.grid ? hp(150) : hp(250),
  };

  const utilityIconStyle = {
    position:
      viewType === VIEW_TYPE.grid
        ? POSITION_TYPE.absolute
        : POSITION_TYPE.relative,
  };

  return {
    id,
    name,
    image,
    status,
    species,
    onPress,
    originName,
    customStyle,
    contentStyle,
    firstEpisode,
    addToFavorite,
    favoriteListIds,
    utilityIconStyle,
    deleteFavoriteItem,
  };
};

export default useListItem;
