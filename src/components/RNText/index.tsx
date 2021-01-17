import React from 'react';
import {Text, TextProps} from 'react-native';

type RNTextProps = TextProps & {
  bold?: boolean;
  size?: number;
  color?: string;
};

const RNText: React.FC<RNTextProps> = ({
  bold = false,
  size = 16,
  children,
  color,
}) => {
  return (
    <Text
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
