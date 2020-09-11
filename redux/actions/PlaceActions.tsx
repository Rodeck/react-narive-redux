import { ADD_PLACE } from './Types'

export const addPlace = (place) => (
    {
        type: ADD_PLACE,
        data: place
    }
);