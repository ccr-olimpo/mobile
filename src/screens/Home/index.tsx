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
  MainChallenges,
  MainChallengesHeader,
  Hackathons,
} from './styles';
import {ScrollView} from 'react-native';
import Partner from '../../components/Partner';
import Challenge from '../../components/Challenge';
import HackathonBanner from '../../components/HackathonBanner';

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
        <SearchBar placeholder="Procure por algum projeto aqui..." />
      </Header>
      <Content>
        <Partners>
          <RNText bold size={16} color="#333333">
            Empresas parceiras
          </RNText>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{alignItems: 'center', paddingLeft: 16}}
            style={{marginTop: 8}}>
            <Partner text="Grupo CCR" />
            <Partner text="Quicko" />
            <Partner text="Shawee" />
            <Partner text="Abcde" />
            <Partner text="Fghij" />
            <Partner text="Klmno" />
          </ScrollView>
        </Partners>
        <MainChallenges>
          <MainChallengesHeader>
            <RNText bold size={16} color="#555555">
              Principais desafios
            </RNText>
            <RNText size={12} color="#777777">
              Ver todos
            </RNText>
          </MainChallengesHeader>
          <Challenge
            hours={99}
            partner="Shawee"
            title="Desafio DevHard"
            stack="UX Design"
          />
          <Challenge
            hours={99}
            partner="Shawee"
            title="Desafio DevHard"
            stack="UX Design"
          />
          <Challenge
            hours={99}
            partner="Shawee"
            title="Desafio DevHard"
            stack="UX Design"
          />
        </MainChallenges>
        <Hackathons>
          <MainChallengesHeader>
            <RNText bold size={16} color="#555555">
              Principais desafios
            </RNText>
            <RNText size={12} color="#777777">
              Ver todos
            </RNText>
          </MainChallengesHeader>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{alignItems: 'center', paddingLeft: 16}}
            style={{marginTop: 8}}>
            <HackathonBanner
              description="Inscrições até dia 10/01"
              title="Hackathon CCR"
            />
            <HackathonBanner
              description="Inscrições até dia 10/01"
              title="Hackathon CCR"
            />
          </ScrollView>
        </Hackathons>
        <MainChallenges>
          <MainChallengesHeader>
            <RNText bold size={16} color="#555555">
              Principais desafios
            </RNText>
            <RNText size={12} color="#777777">
              Ver todos
            </RNText>
          </MainChallengesHeader>
          <Challenge
            hours={99}
            partner="Shawee"
            title="Desafio DevHard"
            stack="UX Design"
          />
          <Challenge
            hours={99}
            partner="Shawee"
            title="Desafio DevHard"
            stack="UX Design"
          />
          <Challenge
            hours={99}
            partner="Shawee"
            title="Desafio DevHard"
            stack="UX Design"
          />
        </MainChallenges>
      </Content>
    </Container>
  );
};

export default Home;
