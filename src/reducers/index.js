import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import artworkRetrievalReducer from './artworkRetrievalReducer';
import cvDataReducer from './cvDataReducer';
import authReducer from './authReducer';
import saveDataReducer from './saveDataReducer';
import experimentDataReducer from './experimentDataReducer';
import fetchUserRatingsReducer from './fetchUserRatingsReducer';


export default combineReducers({
    form : formReducer,
    artworksFetchData : artworkRetrievalReducer,
    resumeData : cvDataReducer,
    auth : authReducer,
    saveData : saveDataReducer,
    experimentData : experimentDataReducer,
    userRatings : fetchUserRatingsReducer

});