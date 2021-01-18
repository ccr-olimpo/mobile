import React from 'react';
import {View, Text, Image} from 'react-native';
import path from 'path';
import RNText from '../../components/RNText';
import Icon from 'react-native-vector-icons/Feather'
import DetailChallenge from '../../components/DetailChallenge';
import { FontAwesome5 } from '@expo/vector-icons';
import {
  Container,
  Content,
  Header,
  Welcome,
  Skill,
  SkillBox,
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
        <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ alignItems: "center", paddingLeft: 16 }}
              style={{ marginTop: 8 }}
            >
              <SkillBox><Skill>Dev Front-End</Skill></SkillBox>
              <SkillBox><Skill>Dev Back-End</Skill></SkillBox>
              <SkillBox selected={true}><Skill>Geral</Skill></SkillBox>
              <SkillBox><Skill>UX Design</Skill></SkillBox>
              <SkillBox><Skill>Dev Full-Stack</Skill></SkillBox>
            </ScrollView>
        </Welcome>
        
      </Header>
      <Content>
        <Partners>
          <FontAwesome5 name="crown" size={32} color="#213A4A" />
        </Partners>
        <RNText size={30}>Em Breve!</RNText>
      </Content>
    </Container>
  );
};

export default Briefing;
