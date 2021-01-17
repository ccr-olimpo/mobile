import React from 'react';
import {View, Text, Image} from 'react-native';
import path from 'path';
import RNText from '../../components/RNText';
import SearchBar from '../../components/SearchBar';
import {
  Container,
  Content,
  Header,
  Welcome,
  TitleAndSubtitle,
  Avatar,
  Partners,
} from './styles';
import img from '../../images/Ellipse 8.png';

const Home = () => {
  return (
    <Container contentInsetAdjustmentBehavior="automatic">
      <Header>
        <Welcome>
          <TitleAndSubtitle>
            <RNText size={32} bold color="#213A4A">
              Olá, Clara!
            </RNText>
            <RNText>Mãos à obra?</RNText>
          </TitleAndSubtitle>
          <Avatar
            source={{
              uri: 'https://reactnative.dev/img/tiny_logo.png',
            }}
          />
        </Welcome>
        <SearchBar placeholder="aaaaaa" />
      </Header>
      <Content>
        <Partners />
      </Content>
    </Container>
  );
};

export default Home;
