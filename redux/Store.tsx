import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import placeReducer, { initialPlacesState, PlacesState } from './reducers/PlaceReducer'
import userReducer, { initialUserState, UserState } from './reducers/UserReducer';

const rootReducer = combineReducers({
    places: placeReducer,
    user: userReducer
});

const middleware = [thunk];

const configureStore = () => createStore(rootReducer, initialState, applyMiddleware(...middleware));

export default configureStore;

export interface AppState {
    places: PlacesState,
    user: UserState
}

const initialState: AppState = {
    places: initialPlacesState,
    user: initialUserState
}
