import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import { connectRouter } from 'connected-react-router';

import artworkRetrievalReducer from './artworkRetrievalReducer';
import cvDataReducer from './cvDataReducer';
import authReducer from './authReducer';
import experimentDataReducer from './experimentDataReducer';
import fetchUserRatingsReducer from './fetchUserRatingsReducer';
import experimentDescriptionReducer from './experimentDescriptionReducer';
import headerDescriptionReducer from './headerDescriptionReducer';


const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  form : formReducer,
  artworksFetchData : artworkRetrievalReducer,
  resumeData : cvDataReducer,
  auth : authReducer,
  experimentData : experimentDataReducer,
  userRatings : fetchUserRatingsReducer,
  experimentDescription : experimentDescriptionReducer,
  headerDescription : headerDescriptionReducer
});

export default createRootReducer;
