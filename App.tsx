import * as React from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements'
import Footer from './screens/Footer';
import { Provider } from 'react-redux'
import configureStore from './redux/Store'
import { connect } from 'react-redux'
import { State } from 'react-native-gesture-handler';
import PlaceList from './screens/PlaceList';
import AddPlace from './screens/AddPlace';

function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
            title="Go to Details"
            onPress={() => navigation.navigate('List')}
        />
    </View>
  );
}

// function PlacesList({navigation}) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>List</Text>
//     </View>
//   );
// }

function PlaceHomeScreen({navigation}) {
  return (
    <Tab.Navigator tabBar={props => <MyTabBar {...props} />}>
      <Tab.Screen name="Places" component={PlaceList} />
      <Tab.Screen name="Add" component={AddPlace} />
    </Tab.Navigator>
  );
}

// function AddPlace({navigation}) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Add</Text>
//     </View>
//   );
// }

function MyTabBar({ state, descriptors, navigation }) {
  return (
    <View style={{ flexDirection: 'row' }}>
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
            accessibilityRole="button"
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1 }}
          >
            {/* <Icon name='rowing'></Icon> */}
            <Icon name={route.name === 'Add' ? 'add' : 'list'} type='material'></Icon>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Store = configureStore();

function App() {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="List" component={PlaceHomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;