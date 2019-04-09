import React from "react";
import PropTypes from "prop-types";
import DropZone from "react-dropzone";
import ImagePreview from "../ImagePreview/ImagePreview";
import Placeholder from "../Placeholder/Placeholder";
import ShowError from "../ShowError/ShowError";

const DropZoneField = ({
  handleOnDrop,
  input: { onChange },
  imagefile,
  meta: { error, touched }
}) => (
  <div className="preview-container">
    <DropZone
      accept="image/jpeg, image/png, image/gif, image/bmp"
      className="upload-container"
      onDrop={file => handleOnDrop(file, onChange)}
      multiple={false}
    >
      {({ getRootProps, getInputProps }) =>
        imagefile && imagefile.length > 0 ? (
          <ImagePreview imagefile={imagefile} />
        ) : (
          <Placeholder
            error={error}
            touched={touched}
            getInputProps={getInputProps}
            getRootProps={getRootProps}
          />
        )
      }
    </DropZone>
    <ShowError error={error} touched={touched} />
  </div>
);

DropZoneField.propTypes = {
  error: PropTypes.string,
  handleOnDrop: PropTypes.func.isRequired,
  imagefile: PropTypes.arrayOf(
    PropTypes.shape({
      file: PropTypes.file,
      name: PropTypes.string,
      preview: PropTypes.string,
      size: PropTypes.number
    })
  ),
  onChange: PropTypes.func,
  touched: PropTypes.bool
};

export default DropZoneField;
