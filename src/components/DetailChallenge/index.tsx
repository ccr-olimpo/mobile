import React, { useState } from "react";
import Icon from "react-native-vector-icons/Feather";
import shawee from "../../images/shawee-logo.png";
import RNText from "../RNText";
import Button from "../Button";
import {
  Container,
  PartnerLogo,
  TopInfo,
  DetailInfo,
  DateDetailInfo,
  Infos,
  Details,
  StackContainer,
} from "./styles";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

type ChallengeProps = {
  partner: string;
  title: string;
  hours: number;
  stack: string;
  description: string;
  date: string;
  handleSubmit: any;
};

const Challenge: React.FC<ChallengeProps> = ({
  hours,
  partner,
  stack,
  title,
  description,
  date,
  handleSubmit,
}) => {
  const nav = useNavigation();
  return (
    <Container>
      <TopInfo>
        <TouchableOpacity onPress={() => nav.navigate("Search")}>
          <PartnerLogo source={shawee} />
        </TouchableOpacity>
        <Infos>
          <RNText color="#333333">{partner}</RNText>
          <RNText bold size={20} color="#213A4A">
            {title}
          </RNText>
          <Details>
            <StackContainer>
              <RNText size={13} color="#333333">
                {stack}
              </RNText>
            </StackContainer>
            <RNText>{hours} horas</RNText>
          </Details>
        </Infos>
      </TopInfo>
      <DetailInfo>
        <RNText bold>O seu desafio nesse teste é:</RNText>
        <RNText size={12}>{description}</RNText>
        <DateDetailInfo>
          <Icon
            style={{ marginRight: 8 }}
            name="info"
            size={24}
            color="#213A4A"
          />
          <RNText size={12}>{date}</RNText>
        </DateDetailInfo>
        <Button onPress={() => handleSubmit()}>Submeter projeto</Button>
      </DetailInfo>
    </Container>
  );
};

export default Challenge;
