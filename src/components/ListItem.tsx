import React from 'react';
import {useListItem} from '../hooks';
import {ListItemProps} from '../types';
import {BasicListItem} from '../ui';

const ListItem = (props: ListItemProps) => {
  const {
    id,
    name,
    image,
    status,
    species,
    onPress,
    originName,
    customStyle,
    firstEpisode,
    contentStyle,
    addToFavorite,
    utilityIconStyle,
    favoriteListIds,
  } = useListItem(props);

  return (
    <BasicListItem
      id={id}
      name={name}
      image={image}
      status={status}
      species={species}
      onPress={onPress}
      origin={originName}
      episode={firstEpisode}
      customStyle={customStyle}
      contentStyle={contentStyle}
      addToFavorite={addToFavorite}
      favoriteListIds={favoriteListIds}
      utilityIconStyle={utilityIconStyle}
    />
  );
};

export default ListItem;
