import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components";
import theme from "./src/global/styles/theme";
import { ActivityIndicator } from "react-native";
import Routes from './src/navigation';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { LogBox } from 'react-native';
LogBox.ignoreAllLogs(true);

export default function App() {

  return (
    <>
      <NavigationContainer>
        <ThemeProvider theme={theme}>
          <GestureHandlerRootView >
            <Routes />
          </GestureHandlerRootView>
          {/* <ActivityIndicator /> */}
          <StatusBar style="light" backgroundColor="transparent" />
        </ThemeProvider>
      </NavigationContainer>
    </>
  );
}
