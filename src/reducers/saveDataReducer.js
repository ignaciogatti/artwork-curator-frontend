import {SAVE_DATA} from '../actions/types';

export default (state, action) => {
    if (action.type === SAVE_DATA){
        return { ...state, [action.payload.id]: action.payload };
    }else {
        return state;
    };

};