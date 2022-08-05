import React, {ReactNode} from 'react';
import {ViewStyle, Pressable, TextStyle} from 'react-native';
import {BoldText} from 'src/components/texts';

type ButtonProps = {
  customstyle?: ViewStyle;
  title?: string;
  onPress?: () => void;
  textStyle?: TextStyle;
  testID?: string;
  disabled?: boolean;
  children?: ReactNode;
};

const Button = (props: ButtonProps) => {
  const {
    customstyle,
    onPress,
    title,
    textStyle,
    children,
    testID,
    disabled,
    ...rest
  } = props;

  return (
    <Pressable
      testID={testID}
      style={customstyle}
      onPress={onPress}
      disabled={disabled}
      {...rest}>
      {!!title ? <BoldText customstyle={textStyle} title={title} /> : children}
    </Pressable>
  );
};

export default Button;
