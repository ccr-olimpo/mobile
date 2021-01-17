import React from 'react';
import {View} from 'react-native';
import RNText from '../RNText';
import {Container} from './styles';

type HackathonBannerProps = {
  title: string;
  description: string;
  image?: React.ReactNode;
};

const HackathonBanner: React.FC<HackathonBannerProps> = ({
  title,
  description,
  image,
}) => {
  return (
    <Container>
      <View
        style={{
          backgroundColor: 'red',
          width: 327,
          height: 168,
          borderTopLeftRadius: 24,
          borderTopRightRadius: 24,
        }}
      />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: 16,
        }}>
        <RNText>{title}</RNText>
        <RNText size={12}>{description}</RNText>
      </View>
    </Container>
  );
};

export default HackathonBanner;
