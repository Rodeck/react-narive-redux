import React from "react";
import { View, Image, Text } from "react-native";
import { GetRandomIpsum } from "../helpers/ContentGenerator";

export function Opinion() {
    return (
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <Image source={{ uri: 'https://picsum.photos/50/50' }} style={{ width: 50, height: 50, margin: 10, borderRadius: 50}} ></Image>
            <Text style={{ margin: 5, paddingRight: 60 }}>{GetRandomIpsum(4)}</Text>
        </View>
    );
  }
  