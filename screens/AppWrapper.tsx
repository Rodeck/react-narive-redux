import React from 'react';
import { StyleSheet} from 'react-native';
import { connect, Provider } from 'react-redux';
import { AnyAction, bindActionCreators, Dispatch } from 'redux';
import { translate } from './../helpers/Translator'
import configureStore, { AppState } from '../redux/Store';
import LoadingScreen from './LoadingScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import LandingPage from './LandingPage';
import AddPlace from './AddPlace';
import { MyTabBar } from './MyTabBar';
import { PlaceListHome } from './PlaceListHome';

type AppWrapperProps = {
    navigation: any,
    isLoading: boolean,
}

type AppWrapperState = {
    isLoading: boolean
}

const Stack = createStackNavigator();
// // const Tab = createBottomTabNavigator();
const Tab = createMaterialTopTabNavigator();

class AppWrapper extends React.Component<AppWrapperProps, AppWrapperState> {
    constructor(props: AppWrapperProps) {
        super(props);
        this.state = {
          isLoading: props.isLoading
        };
      }

    buttonClicked() {

    }

    render() {
        return (
            this.props.isLoading ?
            <LoadingScreen></LoadingScreen> : 
            <NavigationContainer>
                <Tab.Navigator tabBar={props => <MyTabBar {...props} />}>
                    <Tab.Screen name="Landing" component={LandingPage} />
                    <Tab.Screen name="Places" component={PlaceListHome} />
                    <Tab.Screen name="Add" component={AddPlace} />
                </Tab.Navigator>
            </NavigationContainer>
        )
    }

    styles = StyleSheet.create({
    });
}

const mapStateToProps = (state: AppState) => {
    return {
        isLoading: state.places.categorizedIsLoading,
    }
}

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => bindActionCreators({
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(AppWrapper);