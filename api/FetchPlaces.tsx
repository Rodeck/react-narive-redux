import * as FileSystem from 'expo-file-system';
import { readAsStringAsync } from 'expo-file-system';
import { addPlace, addPlaceFailed, addPlaceSuccess, loadCategorizedPlaces, loadCategorizedPlacesFailed, loadCategorizedPlacesSuccess, loadPlaces, loadPlacesFailed, loadPlacesSuccess } from "../redux/actions/PlaceActions";
import { apiConfig } from './ApiConfig';


export function fetchPlaces() {
    return dispatch => {
        console.log('fetchProducts')
        dispatch(loadPlaces());
        fetch(apiConfig.baseAddress + '/Places')
        .then(res => res.json())
        .then(
            (result) => dispatch(loadPlacesSuccess(result)),
            (error) => dispatch(loadPlacesFailed())
        );
    }
}

export function fetchCategorizedPlaces() {
    return dispatch => {
        console.log('fetchCategorizedPlaces')
        dispatch(loadCategorizedPlaces());
        fetch(apiConfig.baseAddress + '/Places')
        .then(res => res.json())
        .then(
            (result) => {
                console.log("Success");
                dispatch(loadCategorizedPlacesSuccess(result));
            },
            (error) => {
                console.log("Error", error);
                dispatch(loadCategorizedPlacesFailed());
            }
        );
    }
}



export function addNewPlace(name: string, description: string, imageUri?: string) {

    return dispatch => {
        dispatch(addPlace());
        if (imageUri) {
            readAsStringAsync(imageUri, { encoding: 'base64'}).then(base64Data => {
                fetch(apiConfig.baseAddress + '/Places', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ placeName: name, description: description, images: [
                        base64Data,
                    ]})
                })
                .then(res => res.json())
                .then(
                    (result) => dispatch(addPlaceSuccess()),
                    (error) => dispatch(addPlaceFailed())
                );
            }, (reason) => console.error(reason));
        }

    }
}