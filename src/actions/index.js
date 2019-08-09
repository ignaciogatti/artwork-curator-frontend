import artworkRetrieval from '../apis/artworkRetrieval';


export const uploadArtwork = fd => async dispatch => {

    dispatch({type:'REQUEST_DATA'});

    const config = {
       headers: {'Content-Type': 'multipart/form-data' }
      };


    const response = await artworkRetrieval.post('/artwork/predict/', fd, config);


    dispatch({type : 'UPLOAD_ARTWORK', payload : response.data.sim_artworks});
  
  };


export const signIn = userId =>{
    return {
        type: 'SIGN_IN',
        payload: userId
    };
};

export const signOut = () =>{
    return {
        type: 'SIGN_OUT'
    };
};