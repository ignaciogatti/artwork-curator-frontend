import artworkRetrieval from '../apis/artworkRetrieval';


export const uploadArtwork = fd => async dispatch => {


    const config = {
       headers: {'Content-Type': 'multipart/form-data' }
      };


    const response = await artworkRetrieval.post('/artwork/predict/', fd, config);
    
    console.log(response);


    dispatch({type : 'UPLOAD_ARTWORK', payload : response.data.sim_artworks});
  
  };