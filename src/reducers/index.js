import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import artworkRetrievalReducer from './artworkRetrievalReducer';
import cvDataReducer from './cvDataReducer';


export default combineReducers({
    form : formReducer,
    artworksFetchData : artworkRetrievalReducer,
    resumeData : cvDataReducer

});