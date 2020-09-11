import * as React from 'react';
import { View, Text, Button } from "react-native";

export default function Footer({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
      </View>
    );
  }