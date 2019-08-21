import {SAVE_DATA} from '../actions/types';

/*
const INITIAL_STATE = {
    success : null,
    ratedArtworks: []
};
*/

export default (state = [], action) => {
    if (action.type === SAVE_DATA){
        return [...state, action.payload];
    }else {
        return state;
    };

};