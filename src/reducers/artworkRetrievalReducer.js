import {
    UPLOAD_ARTWORK,
    REQUEST_DATA,
    RESET_ARTWORK_LIST
} from '../actions/types';


const INITIAL_STATE = {
    items:[{
        "title": "",
        "artist": "",
        "imageUrl": "images/description-app.jpg",
        "id": -1
    }],
    file_id : "",  
    isFetching : false
}

export default (state= INITIAL_STATE, action) => {
             switch(action.type){
                 case UPLOAD_ARTWORK:
                    return {
                        ...state,
                        items: action.payload.sim_artworks,
                        file_id : action.payload.file_id,
                        isFetching:false
                    };
                 case REQUEST_DATA:
                    return {
                        ...state,
                        isFetching:true
                    };
                  case RESET_ARTWORK_LIST:
                    return INITIAL_STATE;
                 default:
                    return state;
            }
}