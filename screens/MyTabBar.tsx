import React from "react";
import { StatusBar, TouchableOpacity, View } from "react-native";
import { Icon } from "react-native-elements";

export function MyTabBar({ state, descriptors, navigation }) {
    const height = StatusBar.currentHeight;
    const routesToIcons = {
      Add: 'add',
      Places: 'list',
      Landing: 'home',
    };
    return (
      <View style={{ flexDirection: 'row', marginTop: height }}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;
  
          const isFocused = state.index === index;
  
          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
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
              key={label}
              accessibilityRole="button"
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{ flex: 1, height: 40, borderBottomWidth: isFocused ? 2 : 0 }}
            >
              <Icon name={routesToIcons[route.name]} type='material'></Icon>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }