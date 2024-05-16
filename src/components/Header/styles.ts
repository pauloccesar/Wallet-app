import styled from "styled-components/native";
import { Feather } from '@expo/vector-icons';

export const Container = styled.View`
  width: 100%;
  height: 50px;
  padding-bottom: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const HeaderContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Icon = styled(Feather).attrs({
  size: 22
})`
  margin-right: 12px;
  color: ${({ theme }) => theme.colors.shape};
`;