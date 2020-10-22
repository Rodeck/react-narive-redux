import React from "react";
import { Dimensions, ScrollView, Text, Image, View } from "react-native";
import { Icon } from "react-native-elements";
import { Place } from "../models/Place";
import { Opinion } from "./Opinion";

type PlaceDetailsProps = {
    route: {
      params: {
        place: Place
      }
    },
  }
  
export class PlaceDetails extends React.Component<PlaceDetailsProps, {}> {
    render() {
      const place = this.props.route.params.place;
      const screenWidth = Math.round(Dimensions.get('window').width);
      return (
        <ScrollView style={{flex: 1, flexDirection: 'column'}}>
          <Text style={{ fontSize: 6, marginTop: 10, alignSelf: 'flex-end', flex: 1}}>{place.createDate.toString()}</Text>
          <Text style={{ fontSize: 23, marginTop: 10, alignSelf: 'center', flex: 4, marginBottom: 15}}>{place.name}</Text>
          { place.images && place.images.length > 0 ?
              <Image source={{uri: `data:image/gif;base64,${place.images[0]}`}} style={{ width: screenWidth, height: 200}} ></Image> :
              <Image source={{ uri: 'https://picsum.photos/200/300' }} style={{ width: screenWidth, height: 200}} ></Image>
          }
          <View style={{flexDirection: 'row', marginTop: 5, marginLeft: 10}}>
              <Icon style={{flex: 1}} color='#5f6b55' name='grade' size={40} type='material'></Icon>
              <Icon style={{flex: 1}} color='#5f6b55' name='navigation' size={40} type='material'></Icon>
          </View>
          <Text style={{ marginTop: 10, alignContent: 'flex-start', flex: 3, padding: 10}} numberOfLines={10}>
              {place.description}
          </Text>
          <View style={{height: 1, borderColor: 'grey', borderWidth: 0.5}} ></View>
          <View>
            <Opinion></Opinion>
            <Opinion></Opinion>
            <Opinion></Opinion>
            <Opinion></Opinion>
          </View>
        </ScrollView>
      )
    }
  }