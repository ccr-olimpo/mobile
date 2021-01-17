import styled from 'styled-components/native';
import RNText from '../../components/RNText';

export const Container = styled.ScrollView`
  background-color: #e9fff9;
  flex-direction: column;
  height: 100%;
`;

export const Header = styled.View`
  background-color: #44ffda;
  width: 100%;
  padding: 17px;
  height: 260px;
  border-bottom-left-radius: 43px;
  flex-direction: column;
  /* flex: 0.5; */
`;

export const Welcome = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  /* background-color: red; */
  height: 60px;
`;

export const Top = styled.View`
  flex:1;
  flex-direction: row;
  align-items: center;
  justify-content:space-between;
`;

export const TopSave = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const TopTextSave = styled.Text`
  font-size:12px;
`;

export const Avatar = styled.Image`
  background-color: white;
  width: 48px;
  height: 48px;
  border-radius: 24px;
  margin-right: 9px;
`;

export const Content = styled.View`
  width: 100%;
  height: 100%;
  align-items:center;
  border-bottom-left-radius: 43px;
  /* flex: 1.5; */
`;

export const Partners = styled.View`
  flex-direction: column;
  margin-top: -90px;
  justify-content: space-between;
  height: 162px;
  /* -bottom: 16px; */
`;

export const PartnersTitle = styled(RNText)`
  /* color: #fff; */
  /* background-color: red; */
  /* padding-left: 20px; */
`;

export const MainChallenges = styled.View`
  padding: 16px;
`;

export const MainChallengesHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Hackathons = styled.View`
  padding: 16px;
`;
