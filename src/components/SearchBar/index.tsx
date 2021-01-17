import React from 'react';
import {Image, TextInputProps, Text} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';
import {Container, TextInput} from './styles';

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
      {/* {!!leftIcon ? leftIcon : <Image source={{uri: ''}} />} */}
      <TextInput placeholderTextColor="#777777" placeholder={placeholder} />
      {/* {!!rightIcon ? rightIcon : <View style={{backgroundColor: 'blue'}} />} */}
    </Container>
  );
};

export default SearchBar;
