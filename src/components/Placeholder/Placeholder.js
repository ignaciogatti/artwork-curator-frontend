import React from "react";
import PropTypes from "prop-types";
import { MdCloudUpload } from "react-icons/md";


const Placeholder = ({ getInputProps, getRootProps, error, touched }) => (
  <div
    {...getRootProps()}
    className={`placeholder-preview ${error && touched ? "has-error" : ""}`}
  >
    <div className="image-container">
      <input {...getInputProps()} />
      <MdCloudUpload id="uploadIcon" />
    </div>
    <div className="details">
      <p>Click or drag image file to upload.</p>
    </div>
  </div>
);

Placeholder.propTypes = {
  error: PropTypes.string,
  getInputProps: PropTypes.func.isRequired,
  getRootProps: PropTypes.func.isRequired,
  touched: PropTypes.bool
};

export default Placeholder;
