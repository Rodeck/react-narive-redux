import { createStore, combineReducers } from 'redux'
import placeReducer, { PlacesState } from './reducers/PlaceReducer'

const rootReducer = combineReducers({
    places: placeReducer
});

const configureStore = () => createStore(rootReducer);

export default configureStore;

export interface AppState {
    places: PlacesState
}
