import React from "react";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";
import Challenge from "../../components/Challenge";
import HackathonBanner from "../../components/HackathonBanner";
import Partner from "../../components/Partner";
import RNText from "../../components/RNText";
import SearchBar from "../../components/SearchBar";
import { Container } from "../../components/SearchBar/styles";
import {
  Welcome,
  TitleAndSubtitle,
  Avatar,
  Content,
  Partners,
  MainChallenges,
  MainChallengesHeader,
  Hackathons,
} from "../Home/styles";
import { Header, Top, TopSave, TopTextSave } from "./styles";
import { View } from "react-native";
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

const Search = () => {
  const nav = useNavigation();
  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Header>
          <Welcome>
            <Top>
              <TouchableOpacity onPress={() => nav.navigate("Home")}>
                <MaterialIcons name="arrow-back" size={32} color="#333333" />
              </TouchableOpacity>
              <RNText size={24} bold color="#333333">
                Desafios
              </RNText>
              <View style={{ marginLeft: 25 }}></View>
            </Top>
          </Welcome>

          <SearchBar
            placeholder="Procure por algum projeto aqui..."
            showClear
            onSubmit={() => console.log("")}
          />
        </Header>
        <Content>
          <MainChallenges>
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
        </Content>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Search;
