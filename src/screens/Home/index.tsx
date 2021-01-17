import React from "react";
import RNText from "../../components/RNText";
import SearchBar from "../../components/SearchBar";
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
} from "./styles";
import { ScrollView } from "react-native";
import avatar from "../../images/avatar.png";
import Partner from "../../components/Partner";
import Challenge from "../../components/Challenge";
import HackathonBanner from "../../components/HackathonBanner";

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
          <Avatar source={avatar} />
        </Welcome>
        <SearchBar placeholder="Procure por algum projeto aqui..." />
      </Header>
      <Content>
        <Partners>
          <RNText bold size={16} color="#333333" marginLeft={30}>
            Empresas parceiras
          </RNText>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ alignItems: "center", paddingLeft: 16 }}
            style={{ marginTop: 8 }}
          >
            <Partner text="Grupo CCR" image="ccr" />
            <Partner text="Quicko" image="quicko" />
            <Partner text="Shawee" image="shawee" />
            <Partner text="Rocket" image="rocket" />
            <Partner text="Empreend" image="empreende" />
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
            image="shawee"
            hours={99}
            partner="Shawee"
            title="Desafio DevHard"
            stack="UX Design"
          />
          <Challenge
            image="rocket"
            hours={99}
            partner="RocketSeat"
            title="Projeto ReactNow"
            stack="Front-end"
          />
          <Challenge
            image="empreende"
            hours={99}
            partner="Empreende aí"
            title="Missão periferiaVive"
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
            contentContainerStyle={{ alignItems: "center", paddingLeft: 16 }}
            style={{ marginTop: 8 }}
          >
            <HackathonBanner
              image="ccrhack"
              description="Inscrições até dia 10/02"
              title="Hackathon CCR"
            />
            <HackathonBanner
              image="megahack"
              description="Inscrições até dia 22/01"
              title="MegaHack"
            />
          </ScrollView>
        </Hackathons>
        <MainChallenges>
          <MainChallengesHeader>
            <RNText bold size={16} color="#555555">
              Recrutando agora
            </RNText>
            <RNText size={12} color="#777777">
              Ver todos
            </RNText>
          </MainChallengesHeader>
          <Challenge
            image="ccr"
            hours={99}
            partner="Instituto CCR"
            title="Desafio Covid-19"
            stack="UX Design"
          />
          <Challenge
            image="rocket"
            hours={99}
            partner="RocketSeat"
            title="Projeto ReactNow"
            stack="Front-end"
          />
          <Challenge
            image="empreende"
            hours={99}
            partner="Empreende aí"
            title="Missão periferiaVive"
            stack="UX Design"
          />
        </MainChallenges>
      </Content>
    </Container>
  );
};

export default Home;
