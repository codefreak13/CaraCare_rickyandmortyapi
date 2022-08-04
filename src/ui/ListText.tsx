import React from 'react';
import {StyleSheet, TextStyle, View} from 'react-native';
import {BoldText, MediumText} from '.';
import {COLORS, hp} from '../utils/Utils';

interface Props {
  title: string;
  content: string | number;
  contentStyle?: TextStyle;
}

const ListText = (props: Props) => {
  const {title, content, contentStyle} = props;

  return (
    <View style={styles.mainStyle}>
      <BoldText title={title} customstyle={styles.titleStyle} />
      <MediumText
        title={content}
        customstyle={{...styles.contentStyle, ...contentStyle}}
      />
    </View>
  );
};

export default ListText;

const styles = StyleSheet.create({
  mainStyle: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleStyle: {
    color: COLORS.Black,
    backgroundColor: COLORS.OffWhite,
    padding: hp(2),
    marginBottom: hp(1),
    marginRight: hp(5),
    alignSelf: 'center',
    minWidth: hp(65),
  },
  contentStyle: {
    color: COLORS.Black,
    width: hp(150),
    flexWrap: 'wrap',
  },
});
