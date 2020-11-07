import React from 'react';
import { Button, Text, View, Image, TouchableOpacity, StyleSheet, StatusBar, Animated, ActivityIndicator} from 'react-native';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import { AnyAction, bindActionCreators, Dispatch } from 'redux';
import { translate } from '../helpers/Translator'
import { AppState } from '../redux/Store';
import { fetchCategorizedPlaces } from '../api/FetchPlaces';
import { authorize } from 'react-native-app-auth';
import { apiConfig } from '../api/ApiConfig';

type LoginScreenProps = {
}

type LoginScreenState = {
}

export class LoginScreen extends React.Component<LoginScreenProps, LoginScreenState> {

    private config = {
        issuer: apiConfig.authAddress,
        clientId: apiConfig.clientId,
        redirectUrl: 'https://openidconnect.net/callback',
        scopes: ['DringSpot.Mobile'],
      };

    constructor(props: LoginScreenProps) {
        super(props);
        this.state = {
        };

      }

    async login_onClick() {
        console.log(this.config);
        const result = await authorize(this.config);
    }

    render() {
        const height = StatusBar.currentHeight;

        return (
            <View style={{ display: 'flex', height: '100%', justifyContent: 'center', flexDirection: 'column' }} >
                <View style={{ flexDirection: 'column', marginTop: height, height: '50%', display: 'flex' }}>
                    <Image source={ require('./../assets/dring_logo.png') } style={{ width: 150, height: 150, alignSelf: 'center', marginBottom: 100}} ></Image>
                    <Text style={{ fontSize: 30, padding: 20, textAlign: 'center' }}>You are not authorized, please LogIn first.</Text>
                    <View style={{ width: 200, alignSelf: 'center' }}>
                        <Button title="Login" onPress={() => this.login_onClick()}></Button>
                    </View>
                </View>
            </View>
        )
    }

    styles = StyleSheet.create({
    });
}

const mapStateToProps = (state: AppState) => {
    return {
    }
}

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => bindActionCreators({
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);