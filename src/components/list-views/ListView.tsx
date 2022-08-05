import React from 'react';
import BasicList from './BasicList';
import {Character, VIEW_TYPE} from 'src/types';
import {ListItem} from 'src/components/list-items';

type Props = {
  data: Character[];
  viewType: string;
  loadMore: () => void;
  onPress: (item: Character) => void;
  addToFavorite: (item: Character) => void;
};

const ListView = (props: Props) => {
  const {data, viewType, loadMore, onPress, addToFavorite} = props;
  return (
    <BasicList
      data={data}
      onEndReached={loadMore}
      onEndReachedThreshold={2.5}
      keyValue={viewType === VIEW_TYPE.grid ? 1 : 0}
      numColumns={viewType === VIEW_TYPE.grid ? 2 : 0}
      keyExtractor={(item, index) => item.id.toString() + index.toString()}
      renderItem={({item}) => (
        <ListItem
          {...item}
          viewType={viewType}
          onPress={() => onPress(item)}
          addToFavorite={() => addToFavorite(item)}
        />
      )}
    />
  );
};

export default ListView;
