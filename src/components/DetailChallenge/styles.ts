import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: #ffffff;
  flex-direction: column;
  width:330px;
  border-radius: 24px;
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.04);
  align-items: center;
  padding: 16px;
  margin-top: -180px;
`;

export const TopInfo = styled.View`
  flex-direction: row;
  height: 112px;
`;
export const DetailInfo = styled.View`
  flex: 1;
  padding-left: 25px;
  flex-direction: column;
  margin-right: auto;
`;

export const DateDetailInfo = styled.View`
  margin-top: 10px;
  flex-direction: row;
  align-items: center;
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
  /* justify-content: flex-end; */
  align-items: center;
`;

export const StackContainer = styled.View<{borderColor?: string}>`
  border-color: ${({borderColor}) => borderColor || '#000'};
  border: 1px solid;
  border-radius: 4px;
  width: 121px;
  margin-right: 10px;
  height: 24px;
  align-items: center;
  justify-content: center;
  /* align-self: flex-end; */
`;

// export const StackText = styled.Text`
//   color: ${({color}) => color || '#000'};
//   font-size: 16px;
//   font-weight: bold;
// `;
