import React from 'react';
import {hp} from 'src/utils/Utils';
import {Character} from 'src/types';
import {BoldText} from 'src/components/texts';
import {View, FlatList, StyleSheet, ListRenderItem} from 'react-native';

type Props = {
  data: Character[];
  keyValue?: number;
  numColumns?: number;
  onEndReached?: () => void;
  onEndReachedThreshold?: number;
  renderItem: ListRenderItem<Character>;
  keyExtractor: (item: Character, index: number) => string;
};

const BasicList = (props: Props) => {
  const {
    data,
    keyValue,
    renderItem,
    numColumns,
    keyExtractor,
    onEndReached,
    onEndReachedThreshold,
  } = props;
  return (
    <FlatList
      data={data}
      key={keyValue}
      numColumns={numColumns}
      style={styles.listStyle}
      onEndReached={onEndReached}
      keyExtractor={keyExtractor}
      showsVerticalScrollIndicator={false}
      onEndReachedThreshold={onEndReachedThreshold}
      ListEmptyComponent={
        <View style={styles.emptyListStyle}>
          <BoldText title="No Item" />
        </View>
      }
      renderItem={renderItem}
    />
  );
};

const styles = StyleSheet.create({
  listStyle: {
    flex: 1,
    width: '100%',
  },
  emptyListStyle: {
    marginTop: hp(200),
    alignItems: 'center',
  },
  titleContainerStyle: {
    marginTop: hp(20),
    marginHorizontal: hp(10),
    alignItems: 'flex-start',
    backgroundColor: 'transparent',
  },
});

export default BasicList;
