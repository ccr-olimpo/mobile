import React from "react";
import { Image, ImageSourcePropType, View, ImageProps } from "react-native";
import ccrhack from "../../images/ccr-hackathon.png";
import bytebank from "../../images/byte-bank.png";
import cpfl from "../../images/cpfl.png";
import megahack from "../../images/megahack.png";
import RNText from "../RNText";
import { Container } from "./styles";

type HackathonBannerProps = {
  title: string;
  description: string;
  image: string;
};

const imagesMap: any = {
  ccrhack,
  bytebank,
  cpfl,
  megahack
};

const HackathonBanner: React.FC<HackathonBannerProps> = ({
  title,
  description,
  image,
}) => {
  return (
    <Container>
      <Image
        source={imagesMap[image]}
        style={{
          width: 327,
          height: 168,
          borderTopLeftRadius: 24,
          borderTopRightRadius: 24,
        }}
      />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: 16,
        }}
      >
        <RNText>{title}</RNText>
        <RNText size={12}>{description}</RNText>
      </View>
    </Container>
  );
};

export default HackathonBanner;
