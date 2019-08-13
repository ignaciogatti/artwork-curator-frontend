import artworkRetrieval from '../apis/artworkRetrieval';
import dataExperiment from '../apis/dataExperiment';
import {
    REQUEST_DATA,
    UPLOAD_ARTWORK,
    SIGN_IN,
    SIGN_OUT,
    SAVE_DATA
} from './types';


export const uploadArtwork = fd => async dispatch => {

    dispatch({type:REQUEST_DATA});

    const config = {
       headers: {'Content-Type': 'multipart/form-data' }
      };

    const response = await artworkRetrieval.post('/artwork/predict/', fd, config);

    dispatch({type : UPLOAD_ARTWORK, payload : response.data.sim_artworks});
  
  };


export const signIn = userId =>{
    return {
        type: SIGN_IN,
        payload: userId
    };
};

export const signOut = () =>{
    return {
        type: SIGN_OUT
    };
};

export const save_data = rating => async (dispatch, getState) => {

    const {userId} = getState().auth;
    const response = await dataExperiment.post('/putData', {...{id : userId, message: rating} });
    
    dispatch({type: SAVE_DATA, payload: response.data});

};