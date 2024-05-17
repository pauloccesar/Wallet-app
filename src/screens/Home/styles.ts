import styled from 'styled-components/native';


export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  justify-content: center;
  align-items: center;
  /* margin-left: 12px;
  margin-right: 12px; */
`;

export const Content = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-left: 8px;
  margin-right: 8px;
`;