import React from 'react';
import {useListItem} from 'src/hooks';
import {ListItemProps} from 'src/types';
import BasicListItem from './BasicListItem';

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
