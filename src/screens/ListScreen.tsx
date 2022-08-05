import React from 'react';
import {SIZE} from 'src/types';
import {useList} from 'src/hooks';
import {statusData} from 'src/data';
import {COLORS, hp} from 'src/utils/Utils';
import {View, StyleSheet} from 'react-native';
import {Header, Button, Input, PickerSelect, Loader} from 'src/components';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {BoldText} from 'src/components/texts';
import {ListView} from 'src/components/list-views';

const Home = () => {
  const {
    onChangeFormValue,
    toggleViewType,
    goToFavorites,
    addToFavorite,
    loadMoreState,
    renderedData,
    onChangeText,
    searchParam,
    onClearText,
    viewType,
    loadMore,
    onPress,
    loading,
    status,
    error,
  } = useList();
  return (
    <>
      {loading && renderedData.length === 0 ? (
        <Loader size={SIZE.large} />
      ) : error ? (
        <BoldText customstyle={styles.errorText} title="Network Error" />
      ) : (
        <View style={styles.mainStyle}>
          <Header title="CHARACTERS" customMiddleIcon />
          <Input
            value={searchParam}
            placeholder="Search"
            onClear={onClearText}
            setValue={onChangeText}
          />
          <View style={styles.filterBar}>
            <View style={styles.utility}>
              <View style={styles.utilityItem}>
                <BoldText title="View: " />
                <Ionicons
                  size={20}
                  name={viewType}
                  color={COLORS.Black}
                  onPress={toggleViewType}
                />
              </View>
              <View style={styles.utilityItem}>
                <BoldText title="Filter: " />
                <PickerSelect
                  value={status}
                  items={statusData}
                  placeholder="Status"
                  onValueChange={onChangeFormValue('status')}
                />
              </View>
            </View>
            <Button
              title="Go To Favorites"
              onPress={goToFavorites}
              customstyle={styles.buttonStyle}
            />
          </View>

          <ListView
            onPress={onPress}
            data={renderedData}
            viewType={viewType}
            loadMore={loadMore}
            addToFavorite={addToFavorite}
          />
          {loadMoreState && <Loader loadingStyle={styles.loadingStyle} />}
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  mainStyle: {
    flex: 1,
    marginVertical: hp(20),
    alignItems: 'center',
    marginHorizontal: hp(15),
  },
  buttonStyle: {
    alignSelf: 'center',
    alignItems: 'center',
    borderWidth: hp(0.7),
    borderColor: COLORS.Black,
    backgroundColor: COLORS.White,
    padding: hp(5),
    borderRadius: hp(5),
  },
  errorText: {
    alignSelf: 'center',
    marginVertical: hp(50),
    color: COLORS.Danger,
  },
  filterBar: {
    flex: 0.15,
    flexDirection: 'row',
    marginVertical: hp(20),
    justifyContent: 'space-between',
    width: '100%',
  },
  loadingStyle: {
    position: 'relative',
    bottom: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  utility: {
    flex: 1,
    maxWidth: 100,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  utilityItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default Home;
