import * as React from 'react';
import { View, Button} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux'
import configureStore from './redux/Store'
import AppWrapper from './screens/AppWrapper';

function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
            title="Places"
            onPress={() => navigation.navigate('List')}
        />
    </View>
  );
}



const Stack = createStackNavigator();
// // const Tab = createBottomTabNavigator();
// const Tab = createMaterialTopTabNavigator();
// const Store = configureStore();

// function PlaceDetails({navigation, place}: {navigation: any; place: Place}) {
//   console.log(navigation);
//   return (
//   <Text>{navigation.state.params}</Text>
//   );
// }





// function App() {
//   return (
//     <Provider store={Store}>
//       <NavigationContainer>
//         <Tab.Navigator tabBar={props => <MyTabBar {...props} />}>
//           <Tab.Screen name="Landing" component={LandingPage} />
//           <Tab.Screen name="Places" component={PlaceListHome} />
//           <Tab.Screen name="Add" component={AddPlace} />
//         </Tab.Navigator>
//       </NavigationContainer>
//     </Provider>
//   );
// }

const Store = configureStore();

function App() {
  return (
    <Provider store={Store}>
      <AppWrapper></AppWrapper>
    </Provider>
  );
}

export default App;