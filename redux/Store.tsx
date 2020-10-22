import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import placeReducer, { initialPlacesState, PlacesState } from './reducers/PlaceReducer'

const rootReducer = combineReducers({
    places: placeReducer
});

const middleware = [thunk];

const configureStore = () => createStore(rootReducer, initialState, applyMiddleware(...middleware));

export default configureStore;

export interface AppState {
    places: PlacesState,
}

const initialState: AppState = {
    places: initialPlacesState,
}
