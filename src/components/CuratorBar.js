import React from 'react';
import {Field, reduxForm} from 'redux-form';
import{connect} from 'react-redux';
import {uploadArtwork} from '../actions';

class CuratorBar extends React.Component{

    onSubmit=(formValue)=>{
        this.props.uploadArtwork(formValue);
    }

    render(){
   
        const UploadFile = ({ input: {value: omitValue, ...inputProps }, meta: omitMeta, ...props }) => (
            <input  placeholder="Artwork file" type='file' {...inputProps} {...props} />
          );
        return(
            <form 
                onSubmit= {this.props.handleSubmit(this.onSubmit)}
                className="ui form success"
            >
                <div className="ui fluid action input">
                    <Field 
                        name="artwork" 
                        component={UploadFile} 
                    />
                    <button className="ui submit button">Upload</button>
                </div>
                
            </form>
        );
    };

}


const formWrapped = reduxForm( {
    form: 'curatorBar'
})(CuratorBar);

export default connect(null,{uploadArtwork})(formWrapped)