import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import artworkRetrievalReducer from './artworkRetrievalReducer';

export default combineReducers({
    form : formReducer,
    artworks : artworkRetrievalReducer
});