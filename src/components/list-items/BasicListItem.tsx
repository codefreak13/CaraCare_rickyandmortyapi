import React from 'react';
import {
  View,
  Pressable,
  StyleSheet,
  Platform,
  ViewStyle,
  TextStyle,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FastImage, {ImageStyle} from 'react-native-fast-image';
import {hp, COLORS} from 'src/utils/Utils';
import {ListText} from 'src/components/texts';
import {FAV_ICON} from 'src/types';

type Props = {
  id?: string;
  name: string;
  image: string;
  status: string;
  origin: string;
  gender?: string;
  species: string;
  episode: string;
  onPress?: () => void;
  lastEpisode?: string;
  numOfEpisodes?: number;
  customStyle?: ViewStyle;
  imageStyle?: ImageStyle;
  contentStyle?: TextStyle;
  favoriteListIds?: string[];
  addToFavorite?: () => void;
  utilityIconStyle?: TextStyle;
  deleteFromFavorite?: () => void;
};

const BasicListItem = (props: Props) => {
  const {
    id,
    name,
    image,
    status,
    origin,
    gender,
    species,
    onPress,
    episode,
    imageStyle,
    customStyle,
    lastEpisode,
    favoriteListIds,
    contentStyle,
    numOfEpisodes,
    addToFavorite,
    utilityIconStyle,
    deleteFromFavorite,
  } = props;

  const favIcon = favoriteListIds?.includes(id!)
    ? FAV_ICON.heart
    : FAV_ICON.heartOutline;
  const favColor = favoriteListIds?.includes(id!)
    ? COLORS.Danger
    : COLORS.Black;
  return (
    <Pressable
      onPress={() => onPress && onPress()}
      style={[styles.mainStyle, customStyle]}>
      <View style={styles.containerStyle}>
        <ListText title="Name" content={name} contentStyle={contentStyle} />
        <ListText title="Status" content={status} contentStyle={contentStyle} />
        <ListText
          title="Species"
          content={species}
          contentStyle={contentStyle}
        />
        {!!gender && (
          <ListText
            title="Gender"
            content={gender}
            contentStyle={contentStyle}
          />
        )}
        <ListText title="Origin" content={origin} contentStyle={contentStyle} />
        <ListText
          title={`${!!lastEpisode ? 'First ' : ''}Episode`}
          content={episode}
          contentStyle={contentStyle}
        />
        {!!lastEpisode && (
          <ListText
            title="Last Episode"
            content={lastEpisode}
            contentStyle={contentStyle}
          />
        )}
        {!!numOfEpisodes && (
          <ListText
            title="Number of Episodes"
            content={numOfEpisodes}
            contentStyle={contentStyle}
          />
        )}
      </View>
      <FastImage
        style={[styles.imageStyle, imageStyle]}
        source={{uri: image}}
        resizeMode={FastImage.resizeMode.cover}
      />
      {addToFavorite && (
        <Ionicons
          name={favIcon}
          size={20}
          color={favColor}
          style={[styles.utilityIconStyle, utilityIconStyle]}
          onPress={addToFavorite}
        />
      )}
      {deleteFromFavorite && (
        <Ionicons
          name="trash"
          size={20}
          color={COLORS.Danger}
          style={styles.utilityIconStyle}
          onPress={deleteFromFavorite}
        />
      )}
    </Pressable>
  );
};

export default BasicListItem;

const styles = StyleSheet.create({
  mainStyle: {
    flex: 1,
    marginTop: hp(10),
    flexDirection: 'row',
    backgroundColor: COLORS.White,
    padding: hp(7),
    ...Platform.select({
      android: {
        elevation: 5,
      },
      ios: {
        shadowOffset: {
          width: hp(10),
          height: hp(10),
        },
        shadowColor: COLORS.Grey,
        shadowOpacity: 1,
        zIndex: 999,
      },
    }),
  },
  containerStyle: {
    flex: 1,
  },
  imageStyle: {
    width: hp(100),
    height: hp(100),
    borderRadius: hp(50),
    marginVertical: hp(15),
  },
  utilityIconStyle: {
    position: 'relative',
    right: 5,
    top: 5,
  },
});
