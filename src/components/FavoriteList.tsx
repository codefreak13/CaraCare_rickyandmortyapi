import React from 'react';
import {BasicList} from '../ui';
import {Character} from '../apollo/query';
import FavoriteItem from './FavoriteItem';

type Props = {
  data: Character[];
  onPress: (e: Character) => void;
};

const FavoriteList = (props: Props) => {
  const {data, onPress} = props;
  return (
    <BasicList
      keyExtractor={(item, index) => item.id + index}
      data={data}
      renderItem={({item}) => (
        <FavoriteItem {...item} onPress={() => onPress(item)} />
      )}
    />
  );
};

export default FavoriteList;
