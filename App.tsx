import 'react-native-gesture-handler';
// import 'react-native-reanimated'

import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components";
// import { useFonts } from "expo-font";
import theme from "./src/global/styles/theme";
import { ActivityIndicator } from "react-native";
import Routes from './src/navigation';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

// const [fontsLoaded] = useFonts({
//   "Gibson-Regular": require("./assets/fonts/gibson-regular.otf"),
//   "Gibson-Semibold": require("./assets/fonts/gibson-semibold.otf"),
//   "Gibson-Bold": require("./assets/fonts/gibson-bold.otf"),
// });

export default function App() {
  // return <RootStack />;

  // if (!fontsLoaded) {
  //   return <></>;
  // }

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
