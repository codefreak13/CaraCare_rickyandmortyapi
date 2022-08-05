import React from 'react';
import BasicList from './BasicList';
import {Character} from 'src/types';
import {FavoriteItem} from 'src/components/list-items';

type Props = {
  data: Character[];
  onPress: (e: Character) => void;
};

const FavoriteList = (props: Props) => {
  const {data, onPress} = props;
  return (
    <BasicList
      data={data}
      renderItem={({item}) => (
        <FavoriteItem {...item} onPress={() => onPress(item)} />
      )}
      keyExtractor={(item, index) => item.id.toString() + index.toString()}
    />
  );
};

export default FavoriteList;
