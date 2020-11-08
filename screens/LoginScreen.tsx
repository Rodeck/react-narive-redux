import React from 'react';
import { AsyncStorage, Button, Text, View, Image, StyleSheet, StatusBar} from 'react-native';
import { connect } from 'react-redux';
import { AnyAction, bindActionCreators, Dispatch } from 'redux';
import { translate } from '../helpers/Translator'
import { AppState } from '../redux/Store';
import { apiConfig } from '../api/ApiConfig';
import * as AppAuth from 'expo-app-auth';
import { OAuthProps } from 'expo-app-auth';
import * as Linking from 'expo-linking'
import * as AuthSession from 'expo-auth-session';

type LoginScreenProps = {
}

type LoginScreenState = {
    authState: any;
}

export class LoginScreen extends React.Component<LoginScreenProps, LoginScreenState> {

    constructor(props: LoginScreenProps) {
        super(props);

        this.state = {
            authState: null
        };

      }

    async componentDidMount() {  
        let cachedAuth = await getCachedAuthAsync();
        if (cachedAuth && !this.state.authState) {
            this.setState({
                authState: cachedAuth
            });

            console.log('From cache: ', cachedAuth);
        }
    }

    async login_onClick() {
        const _authState = await signInAsync();
        console.log('Logged in: ', _authState);
        this.setState({
            authState: _authState
        });
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
                <Text>{ this.state.authState }</Text>
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

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  const useProxy = false;

  const redirectUri = AuthSession.makeRedirectUri({
    native: Linking.makeUrl(),
    useProxy,
  });
  
  let config: OAuthProps = {
    issuer: apiConfig.authAddress,
    scopes: ['openid', 'profile'],
    /* This is the CLIENT_ID generated from a Firebase project */
    clientId: apiConfig.clientId,
    redirectUrl: redirectUri,
    serviceConfiguration: {
        authorizationEndpoint: apiConfig.authAddress + '/account/login',
        tokenEndpoint: apiConfig.authAddress + '/account/token'
    },
  };
  
  let StorageKey = '@MyApp:CustomGoogleOAuthKey';
  
  export async function signInAsync() {
    console.log(config);
    let authState = await AppAuth.authAsync(config);
    console.log('logged in:', authState);
    await cacheAuthAsync(authState);
    console.log('signInAsync', authState);
    return authState;
  }
  
  async function cacheAuthAsync(authState) {
    return await AsyncStorage.setItem(StorageKey, JSON.stringify(authState));
  }
  
  export async function getCachedAuthAsync() {
    let value = await AsyncStorage.getItem(StorageKey);
    let authState = JSON.parse(value);
    console.log('getCachedAuthAsync', authState);
    if (authState) {
      if (checkIfTokenExpired(authState)) {
        return refreshAuthAsync(authState);
      } else {
        return authState;
      }
    }
    return null;
  }
  
  function checkIfTokenExpired({ accessTokenExpirationDate }) {
    return new Date(accessTokenExpirationDate) < new Date();
  }
  
  async function refreshAuthAsync({ refreshToken }) {
    let authState = await AppAuth.refreshAsync(config, refreshToken);
    console.log('refreshAuth', authState);
    await cacheAuthAsync(authState);
    return authState;
  }
  
  export async function signOutAsync({ accessToken }) {
    try {
      await AppAuth.revokeAsync(config, {
        token: accessToken,
        isClientIdProvided: true,
      });
      await AsyncStorage.removeItem(StorageKey);
      return null;
    } catch (e) {
      alert(`Failed to revoke token: ${e.message}`);
    }
  }