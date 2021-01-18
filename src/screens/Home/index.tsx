import React from "react";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
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

import avatar from "../../images/avatar.png";
import Partner from "../../components/Partner";
import Challenge from "../../components/Challenge";
import HackathonBanner from "../../components/HackathonBanner";
import { useNavigation } from "@react-navigation/native";

const challenges = [
  {
    image: "shawee",
    hours: 18,
    partner: "Shawee",
    title: "Desafio DevHard",
    stack: "UX Design",
  },
  {
    image: "rocket",
    hours: 25,
    partner: "RocketSeat",
    title: "Projeto ReactNow",
    stack: "Front-end",
  },
  {
    image: "empreende",
    hours: 20,
    partner: "Empreende aí",
    title: "Missão periferiaVive",
    stack: "UX Design",
  },
];

const recruting = [
  {
    image: "ccr",
    hours: 45,
    partner: "Instituto CCR",
    title: "Desafio Covid-19",
    stack: "UX Design",
  },
  {
    image: "rocket",
    hours: 20,
    partner: "RocketSeat",
    title: "Projeto ReactNow",
    stack: "Front-end",
  },
  {
    image: "empreende",
    hours: 15,
    partner: "Empreende aí",
    title: "Missão periferiaVive",
    stack: "UX Design",
  },
];

const Home = ({ navigation }) => {
  const nav = useNavigation();
  return (
    <SafeAreaView>
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
          <SearchBar
            placeholder="Procure por algum projeto aqui..."
            showClear
            onSubmit={() => nav.navigate("Search")}
          />
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
            {challenges.map(({ image, hours, partner, title, stack }, i) => (
              <Challenge
                key={i}
                image={image}
                hours={hours}
                partner={partner}
                title={title}
                stack={stack}
              />
            ))}
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
            {recruting.map(({ image, hours, partner, title, stack }, i) => (
              <Challenge
                key={i}
                image={image}
                hours={hours}
                partner={partner}
                title={title}
                stack={stack}
              />
            ))}
          </MainChallenges>
        </Content>
      </Container>
    </SafeAreaView>
  );
};

export default Home;
