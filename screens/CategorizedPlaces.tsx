import React from 'react';
import { Text, View, Image, TouchableOpacity, StyleSheet} from 'react-native';
import { connect } from 'react-redux';
import { AnyAction, bindActionCreators, Dispatch } from 'redux';
import { fetchCategorizedPlaces } from '../api/FetchPlaces';
import { translate } from './../helpers/Translator'
import { AppState } from '../redux/Store';
import { Place } from '../models/Place';
import { ScrollView } from 'react-native-gesture-handler';

type CategorizedPlacesProps = {
    places: Place[]
}

type CategorizedPlacesState = {
    categories: string[],
    selectedCategories: string[],
}

class CategorizedPlaces extends React.Component<CategorizedPlacesProps, CategorizedPlacesState> {
    constructor(props: CategorizedPlacesProps) {
        super(props);
        this.state = {
            categories: ['outdoor', 'cheap', 'fancy', 'craft beer', 'music', 'quiet', 'romantic', 'indoor', 'rock', 'food', 'italian', 'pizza'],
            selectedCategories: [],
        };
      }

    selectCategory(category: string) {
        if (this.isSelected(category)) {
            this.setState({
                selectedCategories: this.state.selectedCategories.filter(x => x !== category),
            })
        } else {
            this.setState({
                selectedCategories: this.state.selectedCategories.concat([category]),
            })
        }
    }

    isSelected(category: string) {
        return this.state.selectedCategories.indexOf(category) !== -1;
    }

    render() {
        return (
            <View style={{ flexDirection: 'column', padding: 10 }}>
                {/* Categories  */}
                <View>
                    <ScrollView horizontal={true} >
                        {
                            this.state.categories.map(c => (
                                <TouchableOpacity
                                    style={{ backgroundColor: this.isSelected(c) ? '#52c41a' : '#faad14', padding: 6, marginRight: 5, borderRadius: 9 }}
                                    onPress={(event) => this.selectCategory(c)} 
                                >
                                    <Text style={{ fontSize: 15 }}>
                                        {c}
                                    </Text>
                                </TouchableOpacity>
                            ))
                        }
                    </ScrollView>
                </View>
                <View style={{ marginTop: 10}} >
                    <ScrollView horizontal={true} >
                        {
                            this.props.places.map(place => (
                                <View style={{ marginRight: 5 }}>
                                    { place.images && place.images.length > 0 ?
                                        <Image source={{uri: `data:image/gif;base64,${place.images[0]}`}} style={{ width: 200, height: 200}} ></Image> :
                                        <Image source={{ uri: 'https://picsum.photos/200/300' }} style={{ width: 200, height: 200}} ></Image>
                                    }
                                    <View style={{ position: 'relative', top: -20, backgroundColor: 'black', opacity: 0.7 }}>
                                        <Text style={{ fontSize: 20, color: 'white' }}>{ place.name }</Text>
                                    </View>
                                </View>
                            ))
                        }
                    </ScrollView>
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
    }
}

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => bindActionCreators({

}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(CategorizedPlaces);