import React from 'react';
import {Text, TextProps} from 'react-native';

type RNTextProps = TextProps & {
  bold?: boolean;
  size?: number;
  color?: string;
  // marginLeft?: number;
};

const RNText: React.FC<RNTextProps> = ({
  bold = false,
  size = 16,
  children,
  color,
  ...rest
}) => {
  return (
    <Text
      {...rest}
      style={{
        fontFamily: `${bold ? 'Poppins-Bold' : 'Poppins-Regular'}`,
        fontSize: size,
        color,
      }}>
      {children}
    </Text>
  );
};

export default RNText;
