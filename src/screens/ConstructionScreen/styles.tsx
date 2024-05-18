import styled from 'styled-components/native';
import theme from '~/global/styles/theme';

interface SelecteddProps {
  isSelected: boolean;
}

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  justify-content: center;
  align-items: center;
`;

export const Image = styled.Image`
  width: 100%;
  height: 30%;
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-size: 32px;
  margin-top: 16px;
`;
