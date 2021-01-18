import styled from 'styled-components/native';
import RNText from '../../components/RNText';
interface SkillsProps {
  selected: boolean;
}

export const Container = styled.ScrollView`
  background-color: #e9fff9;
  flex-direction: column;
  height: 100%;
`;

export const Header = styled.View`
  background-color: #44ffda;
  width: 100%;
  padding: 17px;
  height: 360px;
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

export const SkillBox = styled.View<SkillsProps>`
  background: ${props=> props.selected ? '#ffffff': 'transparent'};
  align-items:center;
  border-radius: 99;
  min-width: 80px;
  padding: 3px;
  margin-left: 10px;
`;

export const Skill = styled.Text`
  font-size:13px;
  color:#213A4A;
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
  margin-top: -170px;
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
