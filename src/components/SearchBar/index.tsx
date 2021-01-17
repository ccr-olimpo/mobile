import React, { useState } from "react";
import { Image, TextInputProps, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Container, TextInput } from "./styles";
import { TouchableOpacity } from "react-native-gesture-handler";

type SearchBarProps = TextInputProps & {
  showClear?: boolean;
};

const SearchBar: React.FC<SearchBarProps> = ({ placeholder, showClear }) => {
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
      <TouchableOpacity onPress={() => console.log("aa")}>
        <MaterialIcons name="search" size={32} color="#555555" />
      </TouchableOpacity>
      <TextInput
        placeholderTextColor="#777777"
        placeholder={placeholder}
        value={value}
        onChangeText={(text) => setValue(text)}
        onSubmitEditing={() => console.log("bb")}
      />
      {shouldShowClear()}
    </Container>
  );
};

export default SearchBar;
