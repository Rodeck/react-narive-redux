import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Footer from './screens/Footer';

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

function PlacesList({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>List</Text>
    </View>
  );
}

function PlaceHomeScreen({navigation}) {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Places" component={PlacesList} />
      <Tab.Screen name="Add" component={AddPlace} />
    </Tab.Navigator>
  );
}

function AddPlace({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Add</Text>
    </View>
  );
}

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="List" component={PlaceHomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;