import React, { useState } from "react";
import { Image, TextInputProps, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Container, TextInput } from "./styles";
import { TouchableOpacity } from "react-native-gesture-handler";

type SearchBarProps = TextInputProps & {
  showClear?: boolean;
  onSubmit?: any;
};

const SearchBar: React.FC<SearchBarProps> = ({
  placeholder,
  showClear,
  onSubmit,
}) => {
  const [value, setValue] = useState<string>("");
  const shouldShowClear = () => (
    <>
      {showClear && (
        <TouchableOpacity onPress={() => setValue("")}>
          <MaterialIcons name="close" size={32} color="#555555" />
        </TouchableOpacity>
      )}
    </>
  );
  return (
    <Container>
      <TouchableOpacity onPress={() => onSubmit("aa")}>
        <MaterialIcons name="search" size={32} color="#555555" />
      </TouchableOpacity>
      <TextInput
        placeholderTextColor="#777777"
        placeholder={placeholder}
        value={value}
        onChangeText={(text) => setValue(text)}
        onSubmitEditing={() => onSubmit("bb")}
      />
      {shouldShowClear()}
    </Container>
  );
};

export default SearchBar;
