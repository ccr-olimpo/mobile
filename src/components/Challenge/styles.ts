import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: #ffffff;
  flex-direction: row;
  border-radius: 24px;
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.04);
  height: 112px;
  align-items: center;
  padding: 16px;
  margin-top: 16px;
`;

export const PartnerLogo = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 8px;
`;

export const Infos = styled.View`
  flex-direction: column;
  margin-left: 10px;
`;

export const Details = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const StackContainer = styled.View<{borderColor?: string}>`
  /* border-color: #FFF; */
  border: 1px solid #333333 ;
  border-radius: 4px;
  width: 121px;
  height: 24px;
  align-items: center;
  justify-content: space-between;
  margin-left: 60px;
`;

// export const StackText = styled.Text`
//   color: ${({color}) => color || '#000'};
//   font-size: 16px;
//   font-weight: bold;
// `;
