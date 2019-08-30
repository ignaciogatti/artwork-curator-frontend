import React, { Component } from "react";
import { Form, Field, reduxForm } from "redux-form";
import{connect} from 'react-redux';
import Button from 'react-bootstrap/Button';

import DropZoneField from "./DropzoneField/DropzoneField";
import {uploadArtwork, resetArtworkList} from '../actions';
import './UploadForm.css';

const imageIsRequired = value => (!value ? "Required" : undefined);

class UploadImageForm extends Component {
  state = { imageFile: [] };

  handleFormSubmit = formProps => {

    const fd = new FormData();
    fd.append("image_file", formProps.imageToUpload.file);
    // append any additional Redux form fields
    // create an AJAX request here with the created formData
    this.props.uploadArtwork(fd);
  };

  handleOnDrop = (newImageFile, onChange) => {
    const imageFile = {
      file: newImageFile[0],
      name: newImageFile[0].name,
      preview: URL.createObjectURL(newImageFile[0]),
      size: newImageFile[0].size
    };

    this.setState({ imageFile: [imageFile] }, () => onChange(imageFile));
  };

  resetForm = () => {
    this.setState({ imageFile: [] }, () => this.props.reset());
    this.props.resetArtworkList();
  };

  render = () => (
      <div className="app-container">
        <Form id="uploadForm" onSubmit={this.props.handleSubmit(this.handleFormSubmit)}>
          <Field
            name="imageToUpload"
            component={DropZoneField}
            type="file"
            imagefile={this.state.imageFile}
            handleOnDrop={this.handleOnDrop}
            validate={[imageIsRequired]}
          />
          <Button
            className="uploadButton"
            type="submit"
            variant="primary"
            size="lg"
            disabled={this.props.submitting}
          >
            Search
          </Button>
          <Button
            className="uploadButton"
            type="button"
            size="lg"
            variant="secondary"
            disabled={this.props.pristine || this.props.submitting}
            onClick={this.resetForm}
          >
            Clear
          </Button>
        </Form>
        <div className="clear" />
      </div>
  );
}


const formWrapped = reduxForm( {
    form: 'uploadImageForm'
})(UploadImageForm);

export default connect(null,{uploadArtwork, resetArtworkList})(formWrapped);
