import {SAVE_DATA} from '../actions/types';

const INITIAL_STATE = {
    id : null,
    userId: null,
    sourceArtworkId: null,
    ratedArtworkId: null,
    rating: null
};

export default (state = INITIAL_STATE, action) => {
    if (action.type === SAVE_DATA){
        return { ...state, [action.payload.id]: action.payload };
    }else {
        return state;
    };

};