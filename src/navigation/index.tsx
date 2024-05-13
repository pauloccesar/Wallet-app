import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { CustomTabBar } from '../components/CustomTab'

import Home from '~/screens/Home';

import One from '../screens/one';
import Two from '../screens/two';

const Tab = createBottomTabNavigator();

function Routes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#121212",

        tabBarStyle: {
          backgroundColor: "#FFF",
          borderTopWidth: 0
        }
      }}

      tabBar={(props) => <CustomTabBar {...props} />}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: 'home',
        }}
      />
      <Tab.Screen
        name="Money"
        component={Two}
        options={{
          tabBarIcon: 'magnifier'
        }}
      />
      <Tab.Screen
        name="Store"
        component={One}
        options={{
          tabBarIcon: 'wallet',
        }}
      />
      <Tab.Screen
        name="User"
        component={Two}
        options={{
          tabBarIcon: 'user'
        }}
      />
    </Tab.Navigator>
  )
}

export default Routes;