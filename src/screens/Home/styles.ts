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
  /* margin-left: 12px;
  margin-right: 12px; */
`;

export const Content = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-left: 8px;
  margin-right: 8px;
`;

export const ButtonContent = styled.View`
  flex-direction: row;
  width: 100%;
  height: 5%;
  justify-content: space-between;
  /* padding: 16px; */
  /* border: 1px solid transparent;
  border-bottom-color: ${theme.colors.magenta};
  margin-top: 16px;
  border-top: 0px; */
`;

export const TouchableOpacityContent = styled.TouchableOpacity<SelecteddProps>`
  flex: 1;
  border: 2px solid transparent;
  border-bottom-color: ${({ theme, isSelected }) => isSelected ? theme.colors.magenta : theme.colors.shape};
  margin: 8px 8px 0px 8px;
  align-items: center;
  justify-content: center;
`;

export const TextContent = styled.Text<SelecteddProps>`
  color: ${({ theme, isSelected }) => isSelected ? theme.colors.magenta : theme.colors.shape};
  font-size: 24px;
`;