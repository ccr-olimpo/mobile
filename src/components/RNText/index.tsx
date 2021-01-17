import React from "react";
import { Text, TextProps } from "react-native";

type RNTextProps = TextProps & {
  bold?: boolean;
  size?: number;
  color?: string;
  marginLeft?: number;
};

const RNText: React.FC<RNTextProps> = ({
  bold = false,
  size = 16,
  children,
  color,
  marginLeft,
  ...rest
}) => {
  return (
    <Text
      {...rest}
      style={{
        fontFamily: `${bold ? "Poppins_700Bold" : "Poppins_400Regular"}`,
        fontSize: size,
        marginLeft,
        color,
      }}
    >
      {children}
    </Text>
  );
};

export default RNText;
