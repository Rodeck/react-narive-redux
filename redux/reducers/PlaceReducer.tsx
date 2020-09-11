import {ADD_PLACE} from '../actions/Types'
import { Place } from '../../models/Place'

export interface PlacesState {
    places: Place[],
    keyGenerator: number;
}

const initialState: PlacesState = {
    places: [],
    keyGenerator: 0
}

const placeReducer = (state: PlacesState = initialState, action) => {
    switch(action.type) {
        case ADD_PLACE:
            console.log('Add place.');
            return {
                ...state,
                keyGenerator: state.keyGenerator + 1,
                places: state.places.concat([{
                    name: action.data.name,
                    description: action.data.description,
                    addDate: new Date(),
                    key: (state.keyGenerator + 1).toString()
                }])
            }
        default:
            return state;
    }
} 

export default placeReducer;