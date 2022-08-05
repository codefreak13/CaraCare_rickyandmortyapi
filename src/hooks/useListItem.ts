import {useContext} from 'react';
import {hp} from 'src/utils/Utils';
import {Platform} from 'react-native';
import {AppContext} from 'src/store/Context';
import {
  ALIGN_TYPE,
  FLEX_TYPE,
  ListItemProps,
  POSITION_TYPE,
  VIEW_TYPE,
  WRAP,
} from 'src/types';

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

  const mainStyle = {
    flex: 1,
    ...Platform.select({
      ios: {
        flexWrap: viewType === VIEW_TYPE.list ? WRAP.nowrap : WRAP.wrap,
      },
    }),
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
    mainStyle,
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
