import React from 'react';
import RNText from '../RNText';
import {
  Container,
  PartnerLogo,
  Infos,
  Details,
  StackContainer,
} from './styles';

type ChallengeProps = {
  partner: string;
  title: string;
  hours: number;
  stack: string;
};

const Challenge: React.FC<ChallengeProps> = ({
  hours,
  partner,
  stack,
  title,
}) => {
  return (
    <Container>
      <PartnerLogo
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />
      <Infos>
        <RNText>{partner}</RNText>
        <RNText bold>{title}</RNText>
        <Details>
          <RNText style={{marginRight: 50}}>{hours} horas</RNText>
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
