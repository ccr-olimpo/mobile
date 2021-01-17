import React from "react";
import RNText from "../RNText";
import {
  Container,
  PartnerLogo,
  Infos,
  Details,
  StackContainer,
} from "./styles";
import ccr from "../../images/ccr-logo.png";
import rocket from "../../images/rocket-logo.png";
import shawee from "../../images/shawee-logo.png";
import quicko from "../../images/quicko-logo.png";
import empreende from "../../images/empreende-logo.png";

const imagesMap: any = {
  ccr,
  rocket,
  shawee,
  quicko,
  empreende,
};

type ChallengeProps = {
  partner: string;
  title: string;
  hours: number;
  stack: string;
  image: string;
};

const Challenge: React.FC<ChallengeProps> = ({
  hours,
  partner,
  stack,
  title,
  image
}) => {
  return (
    <Container>
      <PartnerLogo
        source={imagesMap[image]}
      />
      <Infos>
        <RNText color="#333333">{partner}</RNText>
        <RNText bold color="#213A4A">{title}</RNText>
        <Details>
          <RNText color="#333333">{hours} horas</RNText>
          <StackContainer>
            <RNText size={13} color="#E949F5">
              {stack}
            </RNText>
          </StackContainer>
        </Details>
      </Infos>
    </Container>
  );
};

export default Challenge;
