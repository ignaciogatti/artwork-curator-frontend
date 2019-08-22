import artworkRetrieval from '../apis/artworkRetrieval';
import dataExperiment from '../apis/dataExperiment';
import experimentData from '../data/experimentData';
import history from '../history';
import {
    REQUEST_DATA,
    UPLOAD_ARTWORK,
    SIGN_IN,
    SIGN_OUT,
    SAVE_DATA,
    FETCH_EXPERIMENT_DATA
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
    history.push('/');
    return {
        type: SIGN_OUT
    };
};

export const save_data = data => async (dispatch, getState) => {

    const {userId} = getState().auth;
    const {sourceArtworkId, ratedArtworkId, rating} = data;
    const response = await dataExperiment.post(
        '/putData', 
        {...{id : parseInt(`${userId}${sourceArtworkId}`),
            userId: userId,
            sourceArtworkId: sourceArtworkId,
            ratedArtworkId: ratedArtworkId, 
            rating: rating
        } });
    
    dispatch({type: SAVE_DATA, payload: response.data});

};

export const fetch_experiment_data = () =>{
    return{
        type:FETCH_EXPERIMENT_DATA,
        payload:experimentData
    };
}