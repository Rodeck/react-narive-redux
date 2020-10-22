import { createStackNavigator } from "@react-navigation/stack";
import { PlaceDetails } from "./PlaceDetails";
import PlaceList from "./PlaceList";
import React from 'react';

const Stack = createStackNavigator();

export function PlaceListHome({navigation}) {
    return (
        <Stack.Navigator
            screenOptions={{
            headerShown: false
            }}
        >
            <Stack.Screen name="PlaceList" component={PlaceList} />
            <Stack.Screen name="PlaceDetails" component={PlaceDetails} />
        </Stack.Navigator>
    );
}