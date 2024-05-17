import { View, TouchableOpacity, StyleSheet, Platform } from 'react-native'

import { SimpleLineIcons } from '@expo/vector-icons'
import theme from '~/global/styles/theme';

export function CustomTabBar({ state, descriptors, navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <TouchableOpacity
              key={route.key}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={styles.buttonTab}
            >
              <View style={{  alignItems: 'center', padding: 4}}>
                <View style={{ padding:8, borderRadius: 99, backgroundColor: isFocused ? theme.colors.magenta : "transparent"}}>
                  <SimpleLineIcons
                    name={options.tabBarIcon}
                    size={34}
                    color={theme.colors.shape}
                  />
                </View>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container:{
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red', 
  },
  content:{
    width: '80%',
    marginBottom: Platform.OS === 'ios' ? 38 : 24,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 0,
    backgroundColor: theme.colors.darkBlue, 
    flexDirection: 'row',
    borderRadius: 99,
    gap: 8,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.80,
  },
  buttonTab:{
    justifyContent: 'center', 
    alignItems: 'center',
  }
})