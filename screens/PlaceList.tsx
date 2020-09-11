import * as React from 'react';
import { View, Text, FlatList } from 'react-native';
import { connect } from 'react-redux'
import { Place } from '../models/Place';

type SinglePlaceProps = {
    place: Place
}

const SinglePlace = ({place}: SinglePlaceProps) => (
    <View>
        <Text>{place.name}</Text>
        <Text>{place.description}</Text>
    </View>
)

type PlaceListProps = {
    places: Place[]
}

class PlaceList extends React.Component<PlaceListProps, {}> {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>List</Text>
                <FlatList
                    data={this.props.places}
                    renderItem={ place => <SinglePlace place={place.item} ></SinglePlace>}
                    keyExtractor={item => item.key}
                />
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        places: state.places.places
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlaceList);