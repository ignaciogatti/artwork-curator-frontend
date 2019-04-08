import artworkRetrieval from '../apis/artworkRetrieval';


export const uploadArtwork = formValue => async dispatch => {
    const data = new FormData();

  
    // Don't send the data until a file has been loaded
    if (typeof formValue.artwork !== 'string' && formValue.artwork !== null) {
      data.append('image_file', formValue.artwork[0], formValue.artwork[0].name);

    }

    const config = {
       headers: {'Content-Type': 'multipart/form-data' }
      };


    const response = await artworkRetrieval.post('/artwork/predict/', data, config);

    dispatch({type : 'UPLOAD_ARTWORK', payload : response.data.sim_artwroks});
  
  };