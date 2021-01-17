import React from "react";
import RNText from "../RNText";
import { Container, PartnerLogo } from "./styles";
import ccr from "../../images/ccr-logo.png";
import rocket from "../../images/rocket-logo.png";
import shawee from "../../images/shawee-logo.png";
import quicko from "../../images/quicko-logo.png";
import empreende from "../../images/empreende-logo.png";


type PartnerProps = {
  image: string;
  text: string;
};

const imagesMap: any = {
  ccr,
  rocket,
  shawee,
  quicko,
  empreende,
};

const Partner: React.FC<PartnerProps> = ({ image, text }) => {
  return (
    <Container>
      <PartnerLogo source={imagesMap[image]} />
      <RNText bold size={16} color="#213A4A">
        {text}
      </RNText>
    </Container>
  );
};

export default Partner;
