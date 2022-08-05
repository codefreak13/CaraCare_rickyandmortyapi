import React from 'react';
import {useListItem} from 'src/hooks';
import {ListItemProps} from 'src/types';
import BasicListItem from './BasicListItem';

const FavoriteItem = (props: ListItemProps) => {
  const {
    name,
    image,
    status,
    species,
    onPress,
    originName,
    firstEpisode,
    contentStyle,
    deleteFavoriteItem,
  } = useListItem(props);

  return (
    <BasicListItem
      name={name}
      status={status}
      episode={firstEpisode}
      species={species}
      image={image}
      origin={originName}
      contentStyle={contentStyle}
      onPress={onPress}
      deleteFromFavorite={() => deleteFavoriteItem(props)}
    />
  );
};

export default FavoriteItem;
