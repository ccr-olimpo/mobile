import React from 'react';
import {ImageProps} from 'react-native';
import RNText from '../RNText';
import {Container, PartnerLogo} from './styles';

type PartnerProps = {
  image?: React.Component<ImageProps>;
  text: string;
};

const Partner: React.FC<PartnerProps> = ({image, text}) => {
  return (
    <Container>
      <PartnerLogo
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />
      <RNText bold size={16}>
        {text}
      </RNText>
    </Container>
  );
};

export default Partner;
