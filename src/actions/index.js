import artworkRetrieval from '../apis/artworkRetrieval';
import dataExperiment from '../apis/dataExperiment';
//--------------------------------Artwork retrieval approaches ----------------------------------------------//
//import {artwork_retrieval_experiment} from '../data/experimentData/encodeExperiment/dataExperimentEncode';
//import {artwork_retrieval_experiment} from '../data/experimentData/socialGraphExperiment/dataExperimentSocialGraph';
//import {artwork_retrieval_experiment} from '../data/experimentData/contentBasedExperiment/dataExperimentContentBased';
import {artwork_retrieval_experiment} from '../data/experimentData/codeEmbeddingExperiment/dataExperimentCodeEmbedding';

//-------------------------------Sequence approaches -----------------------------------------------------//
//import {sequence_experiment} from '../data/experimentData/sequenceApproach/dataExperimentArtistRNN';
//import {sequence_experiment} from '../data/experimentData/sequenceApproach/dataExperimentRNN';
import {sequence_experiment} from '../data/experimentData/sequenceApproach/dataExperimentMostSimilar';

import {
    REQUEST_DATA,
    UPLOAD_ARTWORK,
    SIGN_IN,
    SIGN_OUT,
    SAVE_DATA,
    FETCH_EXPERIMENT_DATA,
    FETCH_USER_RATINGS,
    RESET_ARTWORK_LIST
} from './types';


export const uploadArtwork = fd => async dispatch => {

    dispatch({type:REQUEST_DATA});

    const config = {
       headers: {'Content-Type': 'multipart/form-data' }
      };

    const response = await artworkRetrieval.post(artwork_retrieval_experiment.service_name, fd, config);

    dispatch({type : UPLOAD_ARTWORK, payload : response.data});
  
  };

export const resetArtworkList = () =>{
    return {
        type: RESET_ARTWORK_LIST
    }
}

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

export const save_data = data => async (dispatch, getState) => {

    const {userId} = getState().auth;
    const {sourceArtworkId, ratedArtworkId, experimentType, tourApproach, rating} = data;
    console.log(tourApproach);
    console.log(userId);
    const response = await dataExperiment.post(
        '/putData', 
        {...{
            userId: userId,
            sourceArtworkId: sourceArtworkId.toString(),
            ratedArtworkId: ratedArtworkId.toString(),
            experimentType: experimentType,
            tourApproach: tourApproach, 
            rating: rating
        } });
    
    dispatch({type: SAVE_DATA, payload: response.data});

};

export const fetch_experiment_data = () =>{
    return{
        type:FETCH_EXPERIMENT_DATA,
        payload:{
            'artworkRetrieval':artwork_retrieval_experiment,
            'sequence': sequence_experiment
        }
    };
}

export const fetch_user_ratings = () => async (dispatch, getState) =>{

    const {userId} = getState().auth;
    const response = await dataExperiment.get(
        `/getUserRatings/${userId}`
    )
    
    dispatch({type: FETCH_USER_RATINGS, payload: response.data});
}


export const uploadSequenceArtworks = fd => async dispatch => {

    dispatch({type:REQUEST_DATA});

    const config = {
       headers: {'Content-Type': 'multipart/form-data' }
      };


    const response = await artworkRetrieval.post(sequence_experiment.service_name, fd, config);

    dispatch({type : UPLOAD_ARTWORK, payload : response.data});
  
  };