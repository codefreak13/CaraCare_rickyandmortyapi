import React from 'react';
import {useList} from 'src/hooks';
import {statusData} from 'src/data';
import {COLORS, hp} from 'src/utils/Utils';
import {View, StyleSheet} from 'react-native';
import {BoldText, MediumText, RegularText} from 'src/components/texts';
import {ListView} from 'src/components/list-views';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {INPUT_TEST_ID, FAVORITE_LIST_BUTTON, SIZE, FAV_ICON} from 'src/types';
import {Header, Input, PickerSelect, Loader} from 'src/components/ui';

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
    viewLabel,
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
          <Header
            title="CHARACTERS"
            customMiddleIcon
            rightButton={{
              child: (
                <Ionicons
                  size={35}
                  name={FAV_ICON.heartOutline}
                  color={COLORS.Black}
                  testID={FAVORITE_LIST_BUTTON}
                  onPress={goToFavorites}
                />
              ),
              onclick: () => {},
            }}
          />
          <Input
            value={searchParam}
            placeholder="Search"
            onClear={onClearText}
            setValue={onChangeText}
            testID={INPUT_TEST_ID}
          />
          <View style={styles.filterBar}>
            <View style={styles.utilityItem}>
              <MediumText title="Filter " />
              <PickerSelect
                value={status}
                items={statusData}
                placeholder="Status"
                onValueChange={onChangeFormValue('status')}
              />
            </View>
            <View style={styles.utilityItem}>
              <MediumText title={`${viewLabel} View `} />
              <Ionicons
                size={20}
                name={viewType}
                color={COLORS.Black}
                onPress={toggleViewType}
              />
            </View>
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
  errorText: {
    alignSelf: 'center',
    marginVertical: hp(50),
    color: COLORS.Danger,
  },
  filterBar: {
    flexDirection: 'row',
    marginVertical: hp(10),
    justifyContent: 'space-between',
    width: '100%',
  },
  loadingStyle: {
    position: 'relative',
    bottom: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  utilityItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default Home;
