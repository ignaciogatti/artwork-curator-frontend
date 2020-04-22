import React, { Component } from "react";
import { Form, Field, reduxForm } from "redux-form";
import{connect} from 'react-redux';
import Button from 'react-bootstrap/Button';

import DropZoneField from "./DropzoneField/DropzoneField";
import {uploadSequenceArtworks, resetArtworkList} from '../actions';
import './UploadSequenceForm.css';

const imageIsRequired = value => (!value ? "Required" : undefined);

class UploadSequenceImageForm extends Component {
  state = { imageFiles: [[], [], []] };

  handleFormSubmit = formProps => {

    const fd = new FormData();
    fd.append("image_file_one", formProps.imageToUpload_1.file);
    fd.append("image_file_two", formProps.imageToUpload_2.file);
    fd.append("image_file_three", formProps.imageToUpload_3.file);
    // append any additional Redux form fields
    // create an AJAX request here with the created formData
    this.props.uploadSequenceArtworks(fd);
  };

  handleOnDrop = (newImageFile,id, onChange) => {
    const imageFile = {
      file: newImageFile[0],
      name: newImageFile[0].name,
      preview: URL.createObjectURL(newImageFile[0]),
      size: newImageFile[0].size
    };

    const newImageFilesState = [...this.state.imageFiles];
    newImageFilesState[id] = [imageFile];

    this.setState({ imageFiles: newImageFilesState }, () => onChange(imageFile));
  };

  resetForm = () => {
    this.setState({ imageFiles: [[], [], []] }, () => this.props.reset());
    this.props.resetArtworkList();
  };

  render = () => (
      <div className="app-container">
        <Form id="uploadForm" onSubmit={this.props.handleSubmit(this.handleFormSubmit)}>
          <Field
            name="imageToUpload_1"
            component={DropZoneField}
            type="file"
            imagefile={this.state.imageFiles[0]}
            handleOnDrop={this.handleOnDrop}
            validate={[imageIsRequired]}
            id={0}
          />
          <Field
            name="imageToUpload_2"
            component={DropZoneField}
            type="file"
            imagefile={this.state.imageFiles[1]}
            handleOnDrop={this.handleOnDrop}
            validate={[imageIsRequired]}
            id={1}
          />
          <Field
            name="imageToUpload_3"
            component={DropZoneField}
            type="file"
            imagefile={this.state.imageFiles[2]}
            handleOnDrop={this.handleOnDrop}
            validate={[imageIsRequired]}
            id={2}
          />
          <div className="buttonsPlaceholder">
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
          </div>
          
        </Form>
        <div className="clear" />
      </div>
  );
}


const formWrapped = reduxForm( {
    form: 'uploadImageForm'
})(UploadSequenceImageForm);

export default connect(null,{uploadSequenceArtworks, resetArtworkList})(formWrapped);