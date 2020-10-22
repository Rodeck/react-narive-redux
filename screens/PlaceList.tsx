import * as React from 'react';
import { View, Text, FlatList, Image, Dimensions, ToastAndroid, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux'
import { Place } from '../models/Place';
import { Icon } from 'react-native-elements';
import { AnyAction, bindActionCreators, Dispatch } from 'redux';
import { AppState } from '../redux/Store';
import { fetchPlaces } from '../api/FetchPlaces';
import { TouchableHighlight } from 'react-native-gesture-handler';
import Moment from 'react-moment';

type SinglePlaceProps = {
    place: Place,
    navigation: any
}

const SinglePlace = ({place, navigation}: SinglePlaceProps) => {
    const screenWidth = Math.round(Dimensions.get('window').width);
    const [liked, setLiked] = React.useState(false);

    const showToastWithGravity = (added: boolean) => {
        ToastAndroid.showWithGravity(
          added ? "Added to favorites!" : 'Removed from favorites!',
          ToastAndroid.SHORT,
          ToastAndroid.CENTER
        );
      };

    return (
    <View style={{flex: 1, flexDirection: 'column'}}>
        <View style={{ marginTop: 10, alignSelf: 'flex-end', flex: 1}}><Moment element={Text} date={place.createDate} format='DD.MM.YYYY HH:mm'></Moment></View>
        {/* <View style={{ marginTop: 10, alignSelf: 'flex-end', flex: 1}}><Moment format='DD.MM.YYYY HH:mm'>{place.createDate}</Moment></View> */}
        <Text style={{ fontSize: 23, marginTop: 10, alignSelf: 'center', flex: 4, marginBottom: 15}}>{place.name}</Text>
        <TouchableHighlight onPress={() => navigation.navigate('PlaceDetails', { place: place })}>
        { place.images && place.images.length > 0 ?
            <Image source={{uri: `data:image/gif;base64,${place.images[0]}`}} style={{ width: screenWidth, height: 200}} ></Image> :
            <Image source={{ uri: 'https://picsum.photos/200/300' }} style={{ width: screenWidth, height: 200}} ></Image>
        }
        </TouchableHighlight>
        <View style={{flexDirection: 'row', marginTop: 5, marginLeft: 10}}>
            <Icon style={{flex: 1}} color={ liked ? '#b5d162' : '#5f6b55'} onPress={() => { 
                setLiked(liked ? false : true);
                showToastWithGravity(!liked);
            }} name='grade' size={40} type='material'></Icon>
            <Icon style={{flex: 1}} color='#5f6b55' name='navigation' size={40} type='material'></Icon>
        </View>
        <Text style={{ marginTop: 10, alignContent: 'flex-start', flex: 3, padding: 10}} numberOfLines={10} onPress={() => navigation.navigate('PlaceDetails', { place: place })}>
            {place.description}
        </Text>
        <View style={{height: 1, borderColor: 'grey', borderWidth: 0.5}} ></View>
    </View>
    )
}

type PlaceListProps = {
    places: Place[],
    navigation: any,
    load: () => void,
    isLoading: boolean,
    isError: boolean
}

class PlaceList extends React.Component<PlaceListProps, {}> {

    constructor(props: PlaceListProps) {
        super(props);

        props.load();
    }

    render() {
        if (this.props.isError) {
            return (
                <View style={{backgroundColor: '#b84b48'}}>
                    <Icon name='error' ></Icon>
                    <Text>An Error ocurred!</Text>
                </View>
            );
        }

        // console.log(this.props.isLoading);
        
        return (
            <View style={{ flex: 1 }}>
                <FlatList
                    onRefresh={() => this.props.load()}
                    refreshing={this.props.isLoading}
                    style={{flex: 1}}
                    data={this.props.places}
                    renderItem={ place => <SinglePlace key={place.item.id} place={place.item} navigation={this.props.navigation} ></SinglePlace>}
                    keyExtractor={item => item.id}
                />
            </View>
        );
    }
}

const mapStateToProps = (state: AppState) => {
    return {
        places: state.places.places,
        isLoading: state.places.isLoading,
        isError: state.places.isError,
    }
}

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => bindActionCreators({
    load: fetchPlaces
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(PlaceList);