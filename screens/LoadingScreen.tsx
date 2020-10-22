import React from 'react';
import { Button, Text, View, Image, TouchableOpacity, StyleSheet, StatusBar, Animated, ActivityIndicator} from 'react-native';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import { AnyAction, bindActionCreators, Dispatch } from 'redux';
import { translate } from './../helpers/Translator'
import { AppState } from '../redux/Store';
import { fetchCategorizedPlaces } from '../api/FetchPlaces';

type LoadingScreenProps = {
    navigation: any,
    load: () => void,
    isLoading: boolean,
}

type LoadingScreenState = {
    isLoading: boolean
}

class LoadingScreen extends React.Component<LoadingScreenProps, LoadingScreenState> {
    constructor(props: LoadingScreenProps) {
        super(props);
        this.state = {
          isLoading: props.isLoading
        };

        this.props.load();
      }

    buttonClicked() {

    }

    render() {
        const height = StatusBar.currentHeight;

        return (
            <View style={{ display: 'flex', height: '100%', justifyContent: 'center', flexDirection: 'column' }} >
                <View style={{ flexDirection: 'column', marginTop: height, height: '25%' }}>
                    <Image source={ require('./../assets/dring_logo.png') } style={{ width: 150, height: 150, alignSelf: 'center'}} ></Image>
                    <ActivityIndicator style={{ marginTop: 20 }} size="large" color="#00ff00" />
                </View>
            </View>
        )
    }

    styles = StyleSheet.create({
    });
}

const mapStateToProps = (state: AppState) => {
    return {
        places: state.places.categorizedPlaces,
        isLoading: state.places.categorizedIsLoading,
        isError: state.places.isError,
    }
}

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => bindActionCreators({
    load: fetchCategorizedPlaces
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(LoadingScreen);