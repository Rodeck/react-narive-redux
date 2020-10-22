import React from 'react';
import { Button, Text, View, Image, TouchableOpacity, StyleSheet} from 'react-native';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import { AnyAction, bindActionCreators, Dispatch } from 'redux';
import { Place } from '../models/Place';
import { AppState } from '../redux/Store';
import { translate } from './../helpers/Translator'
import CategorizedPlaces from './CategorizedPlaces';

type LandingPageProps = {
    places: Place[]
}

type LandingPageState = {

}

class LandingPage extends React.Component<LandingPageProps, LandingPageState> {
    constructor(props: LandingPageProps) {
        super(props);
        this.state = {
          name: '',
          description: '',
        };
      }

    buttonClicked() {

    }

    render() {
        return (
            <View style={{ flexDirection: 'column' }}>
                {/* About dring spot */}
                <View style={{ marginTop: 15 }}>
                    <View>
                        <Image source={ require('./../assets/dring_logo.png') } style={{ width: 100, height: 100, alignSelf: 'center'}} ></Image>
                    </View>
                    <Text style={{ padding: 10 }}>
                        { translate('dring-spot-description') }
                    </Text>
                    <View style={{ padding: 20 }}>
                        <Button title={ translate('dring-spot-description-learn-more-button') } onPress={() => console.log('Press')}></Button>
                    </View>
                </View>
                <View style={{ marginTop: 15, display: 'flex', flexDirection: 'row', justifyContent: "space-around" }}>
                    <TouchableOpacity
                        activeOpacity={.8} //The opacity of the button when it is pressed
                        style = {this.styles.button}
                        onPress = {() => this.buttonClicked()}
                        >
                        {this.props.children}
                        <Icon name='home' type='material'></Icon>
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={.8} //The opacity of the button when it is pressed
                        style = {this.styles.button}
                        onPress = {() => this.buttonClicked()}
                        >
                        {this.props.children}
                        <Icon name='list' type='material'></Icon>
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={.8} //The opacity of the button when it is pressed
                        style = {this.styles.button}
                        onPress = {() => this.buttonClicked()}
                        >
                        {this.props.children}
                        <Icon name='add' type='material'></Icon>
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={.8} //The opacity of the button when it is pressed
                        style = {this.styles.button}
                        onPress = {() => this.buttonClicked()}
                        >
                        {this.props.children}
                        <Icon name='account-circle' type='material'></Icon>
                    </TouchableOpacity>
                </View>
                <View style={{ marginTop: 15 }}>
                    <CategorizedPlaces></CategorizedPlaces>
                </View>
            </View>
        )
    }

    styles = StyleSheet.create({
        button: {
            justifyContent: 'center',
            alignContent: 'center',
            backgroundColor: '#e3e6e5',
            borderRadius: 37.5,
            width: 75,
            height: 75,
        }
    });
}


const mapStateToProps = (state: AppState) => {
    return {
    }
}

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => bindActionCreators({

}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);