import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  background-color: #e9fff9;
  flex-direction: column;
  height: 100%;
`;

export const Header = styled.View`
  background-color: #44ffda;
  width: 100%;
  padding: 17px;
  height: 316px;
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

export const TitleAndSubtitle = styled.View`
  flex-direction: column;
  justify-content: space-between;
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
  background-color: rgba(68, 255, 21, 0.95);
  border-bottom-left-radius: 43px;
  /* flex: 1.5; */
`;

export const Partners = styled.View`
  flex-direction: column;
  
`;
