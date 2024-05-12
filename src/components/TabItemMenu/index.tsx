import React from "react";
import { SimpleLineIcons } from '@expo/vector-icons';

import { Image } from "react-native";
import { Container, Label } from "./styles";
import theme from '../../global/styles/theme';

interface TabItemMenuProps {
  focused: boolean;
  icon: string;
  label: string;
}

export type RootStackParamList = {
  TabNavigator: undefined;
  Modal: undefined;
};

export function TabItemMenu({ focused, icon, label }: TabItemMenuProps) {

  const iconColor = focused ? theme.colors.shape : theme.colors.secondary.darkGrey;

  return (
    <>
      <Container focused={focused}>
        <SimpleLineIcons 
          name={icon}
          color={iconColor}
          size={20}
        />
      </Container>
      <Label focused={focused} label={label}>
        {label}
      </Label>
    </>
  );
}
