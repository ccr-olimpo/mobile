import React from "react";
import { Image, TextInputProps, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Container, TextInput } from "./styles";

type SearchBarProps = TextInputProps & {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
};

const SearchBar: React.FC<TextInputProps> = ({
  placeholder,
  leftIcon = undefined,
  rightIcon = undefined,
}) => {
  return (
    <Container>
      {!!rightIcon ? rightIcon : <MaterialIcons name="search" size={32} color="#555555" />}
      <TextInput placeholderTextColor="#777777" placeholder={placeholder} />
      {!!rightIcon ? rightIcon : <MaterialIcons name="close" size={32} color="#555555" />}
    </Container>
  );
};

export default SearchBar;
