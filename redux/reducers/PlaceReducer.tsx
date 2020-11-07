import {ADD_PLACE, ADD_PLACE_FAILED, ADD_PLACE_SUCCESS, LOAD_CATEGORIZED_PLACES, LOAD_CATEGORIZED_PLACES_FAILED, LOAD_CATEGORIZED_PLACES_SUCCESS, LOAD_PLACES, LOAD_PLACES_FAILED, LOAD_PLACES_SUCCESS} from '../actions/Types'
import { Place } from '../../models/Place'

export interface PlacesState {
    places: Place[],
    categorizedPlaces: Place[],
    isLoading: boolean;
    isError: boolean;
    isAdding: boolean,
    addingError: boolean,
    categorizedIsLoading: boolean
}

export const initialPlacesState: PlacesState = {
    places: [
    ],
    categorizedPlaces: [],
    isError: false,
    isLoading: false,
    categorizedIsLoading: true,
    isAdding: false,
    addingError: false,
}

const placeReducer = (state: PlacesState = initialPlacesState, action: any): PlacesState => {
    // console.log(action);
    switch(action.type) {
        case ADD_PLACE:
            return {
                ...state,
                isAdding: true,
            }
        case LOAD_PLACES: {
            return {
                ...state,
                isLoading: true,
                isError: false,
            }
        }
        case LOAD_PLACES_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                isError: false,
                places: action.places
            }
        }
        case LOAD_PLACES_FAILED: {
            return {
                ...state,
                isLoading: false,
                isError: true,
            }
        }
        case LOAD_CATEGORIZED_PLACES: {
            return {
                ...state,
                isLoading: true,
                isError: false,
            }
        }
        case LOAD_CATEGORIZED_PLACES_SUCCESS: {
            console.log('xx');
            return {
                ...state,
                isLoading: false,
                categorizedIsLoading: false,
                isError: false,
                categorizedPlaces: action.places
            }
        }
        case LOAD_CATEGORIZED_PLACES_FAILED: {
            console.log('yy');
            return {
                ...state,
                isLoading: false,
                isError: true,
            }
        }
        case ADD_PLACE_SUCCESS: {
            return {
                ...state,
                addingError: false,
                isAdding: false
            }
        }
        case ADD_PLACE_FAILED: {
            return {
                ...state,
                isAdding: false,
                addingError: true,
            }
        }
        default:
            return state;
    }
} 

export default placeReducer;