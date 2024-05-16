import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Image } from 'react-native';
import { Container, Dummy, HeaderContainer, Icon } from "./styles";

// export function Header({ title }) {
export function Header() {
  const navigation = useNavigation();
  return (
    <>
      <Container >
        <Image
          source={require('../../assets/logo.png')}
          style={{ marginLeft: 12 }}
        />
        <Icon name="bell" />
      </Container>
    </>
  );
}
