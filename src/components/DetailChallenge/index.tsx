import React from 'react';
import RNText from '../RNText';
import Icon from 'react-native-vector-icons/Feather'
import Button from '../Button';
import {
  Container,
  PartnerLogo,
  TopInfo,
  DetailInfo,
  DateDetailInfo,
  Infos,
  Details,
  StackContainer,
} from './styles';

type ChallengeProps = {
  partner: string;
  title: string;
  hours: number;
  stack: string;
  description: string;
  date: string;
};

const Challenge: React.FC<ChallengeProps> = ({
  hours,
  partner,
  stack,
  title,
  description,
  date
}) => {
  return (
    <Container>
      <TopInfo>
        <PartnerLogo
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
        />
        <Infos>
          <RNText>{partner}</RNText>
          <RNText bold>{title}</RNText>
          <Details>
            <StackContainer>
              <RNText size={13} color="#E949F5">
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
          <Icon name="info" size={24} color="#213A4A"/>
          <RNText size={12}>{date}</RNText>
        </DateDetailInfo>
        <Button onPress={()=>{}}>Submeter projeto</Button>
      </DetailInfo>
    </Container>
  );
};

export default Challenge;
