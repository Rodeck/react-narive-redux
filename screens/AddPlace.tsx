import React, { useState } from 'react';
import { View, Text, Button, TextInput, ToastAndroid, ActivityIndicator, Platform, Image, TouchableHighlight } from 'react-native';
import { Icon } from 'react-native-elements';
import { AnyAction, bindActionCreators, Dispatch } from 'redux';
import { addNewPlace } from '../api/FetchPlaces';
import { addPlaceFailed } from '../redux/actions/PlaceActions';
import { AppState } from '../redux/Store';
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';
import { connect } from 'react-redux';

type AddPlaceProps = {
    addPlace(name: string, description: string, imageUri?: string): any,
    isAdding: boolean,
    error: boolean,
}

type AddPlaceState = {
    name: string;
    description: string;
    image?: string,
}

class AddPlace extends React.Component<AddPlaceProps, AddPlaceState> {

    showToastWithGravity = () => {
        ToastAndroid.showWithGravity(
          "New place added!",
          ToastAndroid.SHORT,
          ToastAndroid.CENTER
        );
      };

    constructor(props: AddPlaceProps) {
        super(props);
        this.state = {
          name: '',
          description: '',
        };
      }

    render() {
        if (this.props.isAdding) {
            return <ActivityIndicator size="large" color="#00ff00" />
        }

        if (this.props.error) {
            return (
                <View style={{backgroundColor: '#b84b48'}}>
                    <Icon name='error' ></Icon>
                    <Text>An Error ocurred!</Text>
                </View>
            )
        }

        return (
            <View style={{ flex: 1, padding: 20, marginTop: 50, flexDirection: 'column' }}>
                <View style={{flex: 6}}>
                    <TextInput
                        style={{ height: 40, borderColor: '#a4db88', borderWidth: 0.5 }}
                        value={this.state.name}
                        onChangeText={text => this.setState({name: text})}
                        placeholder='Title...'
                    />
                    <View style={{ height: 300, marginTop: 10, justifyContent: 'center', alignItems: 'center', flexDirection: 'column', backgroundColor: '#d5dbd5' }}>
                        { this.state.image ?
                            <TouchableHighlight onPress={() => this.pickImage()}>
                            <Image style={{
                                height: 300,
                                width: 400
                            }}  source={{
                             uri: this.state.image   
                            }}
                            />
                            </TouchableHighlight> :
                            <Icon name='image' reverse={true} onPress={() => this.pickImage()} />
                        }
                    </View>
                    <TextInput
                        style={{ borderColor: '#a4db88', borderWidth: 0.5, marginTop: 10}}
                        value={this.state.description}
                        numberOfLines={5}
                        multiline={true}
                        onChangeText={text => this.setState({description: text})}
                        placeholder='Description...'
                    />
                </View>
                <View>
                    <Button title='Add' onPress={() => {
                        this.props.addPlace(this.state.name, this.state.description, this.state.image);
                        this.showToastWithGravity();
                    }} ></Button>
                </View>
            </View>
        );
    }

    componentDidMount() {
        this.getPermissionAsync();
      }
    
    getPermissionAsync = async () => {
        if (Platform.OS !== 'web') {
            const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
            if (status !== 'granted') {
                alert('Sorry, we need camera roll permissions to make this work!');
            }
        }
    };

    pickImage = async () => {
        try {
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
            });
            if (!result.cancelled) {
                this.setState({ image: result.uri });
            }

            console.log(result);
        } catch (E) {
            console.log(E);
        };
    }
}

const mapStateToProps = (state: AppState) => {
    return {
        isAdding: state.places.isAdding,
        error: state.places.addingError
    }
}

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => bindActionCreators({
    addPlace: addNewPlace
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(AddPlace);