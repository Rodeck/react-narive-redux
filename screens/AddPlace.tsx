import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux'
import { addPlace } from '../redux/actions/PlaceActions'
import { AppState } from '../redux/Store';

class AddPlace extends React.Component {
    render() {
        console.log(this.props);
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Add place</Text>
                <Button title='Add' onPress={() => this.props.addPlace({ name: 'name', description: 'description'})} ></Button>
            </View>
        );
    }
}

const mapStateToProps = (state: AppState) => {
    return {
        places: state.places.places
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPlace: (place) => dispatch(addPlace({name: place.name, description: place.description}))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddPlace);