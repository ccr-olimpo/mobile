import React from 'react';
import {View, Text, Image} from 'react-native';
import path from 'path';
import RNText from '../../components/RNText';
import Icon from 'react-native-vector-icons/Feather'
import DetailChallenge from '../../components/DetailChallenge';
import {
  Container,
  Content,
  Header,
  Welcome,
  Top,
  TopSave,
  TopTextSave,
  Partners,
  MainChallenges,
  MainChallengesHeader,
  Hackathons,
} from './styles';
import {ScrollView} from 'react-native';
import Partner from '../../components/Partner';
import Challenge from '../../components/Challenge';
import HackathonBanner from '../../components/HackathonBanner';

const Briefing = () => {
  return (
    <Container contentInsetAdjustmentBehavior="automatic">
      <Header>
        <Welcome>
          <Top>
            <Icon name="arrow-left" size={32} color="#213A4A" />
            <RNText>Briefing</RNText>
            <TopSave>
              <Icon name="bookmark" size={32} color="#213A4A"/>
              <TopTextSave>salvar {"\n"} projeto</TopTextSave>
            </TopSave>
          </Top>
        </Welcome>
        
      </Header>
      <Content>
      <DetailChallenge
          hours={3}
          partner="Shawee"
          stack="Ux Design"
          title="Melhorando a XP"
          children=""
          description="Encontrar um problema de usabilidade em nossa plataforma e prototipar uma solução, justificando sua proposta."
          date="Data maxima para avaliação: 25 Jan 2021"
        />
      </Content>
    </Container>
  );
};

export default Briefing;
