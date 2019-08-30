import {
    UPLOAD_ARTWORK,
    REQUEST_DATA,
    RESET_ARTWORK_LIST
} from '../actions/types'


const INITIAL_STATE = {
    items:[], 
    isFetching : false
}

export default (state= INITIAL_STATE, action) => {
             switch(action.type){
                 case UPLOAD_ARTWORK:
                    return {
                        ...state,
                        items: action.payload,
                        isFetching:false
                    };
                 case REQUEST_DATA:
                    return {
                        ...state,
                        isFetching:true
                    };
                  case RESET_ARTWORK_LIST:
                    return {
                        ...state,
                        items: [],
                        isFetching:false
                    }
                 default:
                    return state;
            }
}