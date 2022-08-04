import React from 'react';
import {View, FlatList, StyleSheet, ListRenderItem} from 'react-native';
import {hp} from '../utils/Utils';
import {BoldText} from '.';
import {Character} from '../apollo/query';

type Props = {
  data: Character[];
  onEndReached?: () => void;
  onEndReachedThreshold?: number;
  keyValue?: number;
  numColumns?: number;
  renderItem: ListRenderItem<Character> | undefined;
  keyExtractor: (item: Character, index: number) => string;
};

const BasicList = (props: Props) => {
  const {
    data,
    keyValue,
    numColumns,
    onEndReached,
    onEndReachedThreshold,
    keyExtractor,
    renderItem,
  } = props;
  return (
    <FlatList
      style={styles.listStyle}
      keyExtractor={keyExtractor}
      showsVerticalScrollIndicator={false}
      key={keyValue}
      numColumns={numColumns}
      data={data}
      onEndReachedThreshold={onEndReachedThreshold}
      onEndReached={onEndReached}
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
  titleContainerStyle: {
    alignItems: 'flex-start',
    marginHorizontal: hp(10),
    marginTop: hp(20),
    backgroundColor: 'transparent',
  },
  emptyListStyle: {
    alignItems: 'center',
    marginTop: hp(200),
  },
});

export default BasicList;
