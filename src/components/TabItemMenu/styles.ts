import { AntDesign } from '@expo/vector-icons';
import styled, { css } from 'styled-components/native';

interface ItemFocus {
  focused: boolean;
  label?: string;
}

export const Container = styled.View<ItemFocus>`
  width: 40px;
  height: 40px;
  border-radius: 30px;
  background-color: ${({ theme, focused }) =>
    focused ? theme.colors.primary.darkBlue : 'transparent'};
  align-items: center;
  justify-content: center;
`;

export const Label = styled.Text<ItemFocus>`
  ${({ theme, focused, label }) => css`
    font-size: ${focused && label === 'Tab. de preços' ? 11 : focused ? 13 : 10}px;
    font-family: ${theme.fonts.regular};
    color: ${focused ? theme.colors.primary.darkBlue : theme.colors.secondary.darkGrey};
  `}
`;
