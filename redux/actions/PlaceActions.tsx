import { ADD_PLACE, ADD_PLACE_FAILED, ADD_PLACE_SUCCESS, LOAD_CATEGORIZED_PLACES, LOAD_CATEGORIZED_PLACES_FAILED, LOAD_CATEGORIZED_PLACES_SUCCESS, LOAD_PLACES, LOAD_PLACES_FAILED, LOAD_PLACES_SUCCESS } from './Types'

export const addPlace = () => (
    {
        type: ADD_PLACE,
    }
);

export const addPlaceFailed = () => (
    {
        type: ADD_PLACE_FAILED,
    }
);

export const addPlaceSuccess = () => (
    {
        type: ADD_PLACE_SUCCESS,
    }
);

export const loadPlaces = () => (
    {
      type: LOAD_PLACES,
    }
);

export const loadPlacesSuccess = (places) => (
    {
      type: LOAD_PLACES_SUCCESS,
      places: places
    }
);

export const loadPlacesFailed = () => (
    {
      type: LOAD_PLACES_FAILED,
    }
);

export const loadCategorizedPlaces = () => (
    {
      type: LOAD_CATEGORIZED_PLACES,
    }
);

export const loadCategorizedPlacesSuccess = (places) => (
    {
      type: LOAD_CATEGORIZED_PLACES_SUCCESS,
      places: places
    }
);

export const loadCategorizedPlacesFailed = () => (
    {
      type: LOAD_CATEGORIZED_PLACES_FAILED,
    }
);

